import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [Error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (Error) {
        setError(true);
      }
    }, 3000);
  });

  const saveItem = (newTodos) => {
    try {
      const stringiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringiedTodos);
      setItem(newTodos);
    } catch (Error) {
      setError(true);
    }
  };

  return {
    item,
    saveItem,
    loading,
    Error,
  };
}

export { useLocalStorage };
