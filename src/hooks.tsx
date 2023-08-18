import React from "react";
import * as ls from "local-storage";
import { nanoid } from "nanoid/non-secure";

const getCache = <T extends any>(key: string, initial: T): T => {
    const cached = ls.get<T>(key);
    if (cached === null && initial !== null) {
        ls.set<T>(key, initial);
    }
    return cached !== null ? cached : initial;
};

type StateUpdater = (currentState: any) => any;

const isFunction = (val: unknown): val is Function => typeof val === "function";

export const useLocalStorage = <T extends any>(
    key: string,
    initial: T
): [T, (state: T | ((currentState: T) => T)) => void] => {
    const [nativeState, setNativeState] = React.useState<T>(
        getCache<T>(key, initial)
    );

    const setState = React.useCallback((state: T | ((currentState: T) => T)): void => {
        if (isFunction(state)) {
            setNativeState((prev) => {
                const newState = state(prev);
                ls.set(key, newState);
                return newState;
            });
        } else {
            ls.set(key, state);
            setNativeState(state);
        }
    }, [key]);

    return [nativeState, setState];
};

export type CrookFile = {
    id: string;
    created: number;
    modified: number;
    data: any;
};

export const useFiler = (localStorageKey: string, defaultShaders = {}) => {
    const [files, setFiles] = useLocalStorage<Record<string, CrookFile>>(
        localStorageKey,
        defaultShaders
    );

    const add = React.useCallback((data: any, fileId?: string) => {
        const newKey = fileId || nanoid(8);
        const now = Date.now();
        setFiles((files) => ({
            ...files,
            [newKey]: {
                id: newKey,
                created: now,
                modified: now,
                data,
            },
        }));
        return newKey;
    }, [setFiles]);

    const remove = (fileId: string) => {
        setFiles(({ [fileId]: deleted, ...newFiles }) => newFiles);
    };

    const update = (fileId: string, data: any) => {
        setFiles((files) => ({
            ...files,
            [fileId]: {
                ...files[fileId],
                modified: Date.now(),
                data: typeof data === "function" ? data(files[fileId]) : data,
            },
        }));
    };

    const clear = () => {
        setFiles({});
    };

    return [files, { add, remove, update, clear }] as const;
};
