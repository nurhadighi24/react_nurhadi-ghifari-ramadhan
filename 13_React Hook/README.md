(13) React Hook

1. React Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.
2. Hooks pada React:
   1. Hooks dasar
      - useState
      - useEffect
      - useContext
   2. Hooks tambahan
      - useReducer
      - useCallback
      - useMemo
      - useRef
      - useImperativeHandle
      - useLayoutEffect
      - useDebugValue
3. Aturan pada Hooks:
   - Jangan memanggil hooks dari dalam loops, conditions, atau nested function.
   - Jangan memanggil hooks dari fungsi-fungsi Javascript biasa, kita dapat:
     - Memanggil hooks dari komponen-komponen fungsi react.
     - Memanggil hooks dari custom hooks.
