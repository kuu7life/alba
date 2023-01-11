import { createContext } from "react";

const FavoritesContext = createContext({
  subscription: {
    title: "Subscription new",
  },
  credits: [
    {
      credits: 4,
      serviceIds: [3],
    },
    {
      credits: 120,
      serviceIds: [1, 2],
    },
  ],
});

export function FavoritesContextProvider(props) {
  const context = {
    subscription: {
      title: "Subscription new",
    },
    credits: [
      {
        credits: 4,
        serviceIds: [3],
      },
      {
        credits: 120,
        serviceIds: [1, 2],
      },
    ],
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
