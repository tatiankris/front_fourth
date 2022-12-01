import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppRootStateType, AppDispatch } from './store/store';
import { useEffect, useState } from 'react';


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//debounce for api

//УДАЛИТЬ
// export function useDebounce<T>(value: T, delay?: number): T {
//     const [debouncedValue, setDebouncedValue] = useState<T>(value)
//
//     useEffect(() => {
//         const timer = setTimeout(() => setDebouncedValue(value), delay || 500)
//
//         return () => {
//             clearTimeout(timer)
//         }
//     }, [value, delay])
//
//     return debouncedValue
// }