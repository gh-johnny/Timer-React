const localStorageKeyPrefix = '@timer:'
// @timer:key-name-1.0.0

function localStorageUtils(key: string) {

    const localStorageSetItem = (value: unknown) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (err) {
            console.error('localStorage set error; localStorageUtils file: ' + err)
        }
    }

    const localStorageGetItem = () => {
        try {
            const item = window.localStorage.getItem(key) as string
            return item ? JSON.parse(item) as unknown : undefined
        } catch (err) {
            console.error('localStorage get error ;localStorageUtils file: ' + err)
        }
    }

    const localStorageRemoveItem = () => {
        try {
            window.localStorage.removeItem(key)
        } catch (err) {
            console.error('localStorage remove error; localStorageUtils file: ' + err)
        }
    }

    return { localStorageSetItem, localStorageGetItem, localStorageRemoveItem }
}

export { localStorageUtils, localStorageKeyPrefix }
