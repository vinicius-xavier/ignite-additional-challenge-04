export type Continent = {
  id: string;
  continent: string;
  continent_name: string;
  title: string;
  image_url: string;
};

export interface ContinentInfo {
  id: string;
  continent: string;
  continent_name: string;
  banner_url: string;
  title: string;
  description: string;
  countries_count: number;
  languages_count: string;
  cities_top100: CitiesTop100[];
}

export interface CitiesTop100 {
  rank_id: string;
  city_name: string;
  country_name: string;
  country_flag: string;
  image_url: string;
}
