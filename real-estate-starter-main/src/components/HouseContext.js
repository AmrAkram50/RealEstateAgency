import React , {useState , useEffect , createContext} from 'react';
import { Route } from 'react-router-dom';
import {housesData} from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property Type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country;
    });
    const uniqueCountries = ['Location (any)',...new Set(allCountries)];
    setCountries(uniqueCountries);
    
  },[])

  useEffect(()=>{
    const allProperties = houses.map((house)=>{
      return house.type;
    });
    const uniqueProperties = ['Property Type (any)',...new Set(allProperties)];
    setProperties(uniqueProperties);
    
  },[])

  const handleClick = () =>{
    setLoading(true);
    const isDefault = (str) =>{
      return str.split(' ').includes('(any)');
    };
    const minPrice = parseMinPrice(price.split(' '));
    const maxPrice = parseMaxPrice(price.split(' '));
    
    const newHouses = housesData.filter((house)=>{
      const housePrice = parseInt(house.price);
      if(house.country === country && house.type === property
        && housePrice >= minPrice && housePrice<= maxPrice){
          return house;
        }

        if(isDefault(country) && isDefault(property) && isDefault(price)){
          return house;
        }
        if(!isDefault(country) && isDefault(property) && isDefault(price)){
          return house.country === country;
        }
        if(isDefault(country) && !isDefault(property) && isDefault(price)){
          return house.type === property;
        }
        if(isDefault(country) && isDefault(property) && !isDefault(price)){
          if(housePrice >= minPrice && housePrice <= maxPrice){
            return house;
          }
        }
        if(!isDefault(country) && !isDefault(property) && isDefault(price)){
          return house.country === country && house.type===property;
        }
        if(!isDefault(country) && isDefault(property) && !isDefault(price)){
          if(housePrice >= minPrice && housePrice <= maxPrice){
            return house.country === country;
          }
        }
        if(isDefault(country) && !isDefault(property) && !isDefault(price)){
          if(housePrice >= minPrice && housePrice <= maxPrice){
            return house.type === property;
          }
        }
    });
      setTimeout(()=>{
        return newHouses.length < 1 ? setHouses([]):
        setHouses(newHouses),
        setLoading(false)
      })
  }

  const viewListings = (agent) =>{
    setLoading(true);

    const newHouses = housesData.filter((house)=>{
      if(house.agent.name === agent){
        return house;
      }
    })

    setTimeout(()=>{
      return newHouses.length < 1 ? setHouses([]):
      setHouses(newHouses),
      setLoading(false)
    })
  }

  const parseMinPrice = (str) =>{
    if(isNaN(parseInt(str[0]))){
      return(
        4000000
      )
    }
    else{
      return(
        parseInt(str[0])*1000000
      )
    }
  }
  const parseMaxPrice = (str) =>{
    if(isNaN(parseInt(str[0]))){
      return(
        80000000
      )
    }
    else{
      return(
        parseInt(str[2])*1000000
      )
    }
  }

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
      viewListings,
    }}>
        {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
