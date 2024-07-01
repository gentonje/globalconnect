export type Region = 'Africa' | 'America' | 'Europe' | 'Asia';
export type Country = string;

export interface Regions {
  [key: string]: Country[];
}

export const regions: Regions = {
  Africa: ['Kenya', 'Nigeria', 'South Africa', 'Egypt'],
  America: ['USA', 'Canada', 'Brazil', 'Mexico'],
  Europe: ['UK', 'Germany', 'France', 'Italy'],
  Asia: ['China', 'India', 'Japan', 'Singapore']
};