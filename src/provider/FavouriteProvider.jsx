import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks/useLocalStorage";
import AddToFav from "./../components/weather/AddToFav";
const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useLocalStorage("favourites", []);

  const addFav = (latitute, longitute, location) => {
    setFavourite(...favouritem, { latitute, longitute, location });
  };

  const removeFav = (location) => {
    const restFav = favourite.filter(
      (favData) => favData.location !== location
    );
    setFavourite(restFav);
  };

  return (
    <>
      <FavouriteContext.Provider value={{ favourite, AddToFav, removeFav }}>
        {children}
      </FavouriteContext.Provider>
    </>
  );
};

export { FavouriteProvider };
