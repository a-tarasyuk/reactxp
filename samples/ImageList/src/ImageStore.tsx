/**
 * Basic store based on ReSub.
 */

import * as SyncTasks from 'synctasks';
import { StoreBase, AutoSubscribeStore, autoSubscribe } from 'resub';

import GiphyClient from './GiphyClient';

export interface Image {
    originalUrl: string;
    smallUrl: string;
}

@AutoSubscribeStore
export class ImageStore extends StoreBase {
    private _isSearchPending = false;
    private _isFirstSearch = true;
    private _lastSearchQuery = '';
    private _searchQuery = '';
    private _images: Image[] = [];

    private _request: SyncTasks.STPromise<void> | null = null;

    @autoSubscribe
    getImageList() {
        return this._images;
    }

    @autoSubscribe
    getSearchQuery() {
        return this._searchQuery;
    }

    @autoSubscribe
    isPerformingSearch() {
        return this._isSearchPending;
    }

    @autoSubscribe
    isFirstSearch() {
        return this._isFirstSearch;
    }

    updateImageList(searchQuery: string) {
        this._searchQuery = searchQuery;
        this.trigger();

        if (!searchQuery.trim().length) {
            return;
        }

        // If this is the same as the last query, don't bother.
        if (this._lastSearchQuery && searchQuery.trim() === this._lastSearchQuery) {
            return;
        }

        this._isFirstSearch = false;
        this._lastSearchQuery = searchQuery.trim();
        this._images = [];

        // If the query is empty, don't bother with the API call.
        if (searchQuery.length === 0) {
            this._cancelPreviousSearch();
            this.trigger();
            return;
        }

        this._isSearchPending = true;
        this.trigger();


        this._cancelPreviousSearch();
        this._request = this._searchImages(searchQuery);
    }

    private _searchImages(query: string): SyncTasks.STPromise<void> {
        return GiphyClient.searchImages(query)
            .then(images => {
                this._images = images;
                this._isSearchPending = false;
                this.trigger();
            })
            .catch(({ canceled }) => {
                if (!canceled) {
                    this._isSearchPending = false;
                    this.trigger();
                }
            });
    };

    private _cancelPreviousSearch(): void {
        if (this._request) {
            this._request.cancel();
            this._request = null;
        }
    }
}

export default new ImageStore();
