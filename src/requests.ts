import { useMutation, useQuery } from "@tanstack/react-query";
import { songers } from "./mock-data";
import { FavoriteSong, Songer } from "./types";

export const useSongers = () => {
  const dataFromStorage = localStorage.getItem("songers");

  return useQuery({
    queryKey: ["songers"],
    queryFn: () => songers,
    initialData: dataFromStorage
      ? (JSON.parse(dataFromStorage) as Songer[])
      : [],
  });
};

export const useFavoriteSongs = () => {
  const dataFromStorage = localStorage.getItem("favoriteSongs");

  return useQuery({
    queryKey: ["favoriteSongs"],
    queryFn: () =>
      dataFromStorage ? (JSON.parse(dataFromStorage) as FavoriteSong[]) : [],
    initialData: dataFromStorage
      ? (JSON.parse(dataFromStorage) as FavoriteSong[])
      : [],
  });
};

export const useFavoriteSongsMutation = () => {
  return useMutation({
    mutationKey: ["favoriteSongs"],
    mutationFn: (newArray: FavoriteSong[]) => {
      window.localStorage.setItem(`favoriteSongs`, JSON.stringify(newArray));
      return Promise.resolve();
    },
  });
};
