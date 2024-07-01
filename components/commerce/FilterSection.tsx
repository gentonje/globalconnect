// components/FilterSection.tsx
import React from 'react';
import { Globe, MapPin, X } from 'lucide-react';
import { Category, Country, Location, FilterState } from '@/types/commercetypes';
import { categories, countries, locations } from '@/components/commerce/Data';
import CategoryItem from './CategoryItem';

interface FilterSectionProps {
  filters: FilterState;
  updateFilters: (newFilters: Partial<FilterState>) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filters, updateFilters }) => {
  const removeAllFilters = () => {
    updateFilters({
      country: null,
      location: null,
      category: null,
      subcategory: null,
    });
  };

  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          onClick={removeAllFilters}
          className="text-xs text-blue-600 hover:text-blue-800 flex items-center"
        >
          <X size={14} className="mr-1" />
          Remove all filters
        </button>
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="font-medium mb-2 text-sm">Country</h3>
          <div className="flex flex-wrap gap-2">
            {countries.map((country: Country) => (
              <button
                key={country.name}
                onClick={() => updateFilters({ country: country.name, location: null })}
                className={`px-3 py-1 rounded-full flex items-center text-xs ${
                  country.name === filters.country
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Globe size={12} className="mr-1" />
                {country.name}
              </button>
            ))}
          </div>
        </div>

        {filters.country && (
          <div>
            <h3 className="font-medium mb-2 text-sm">Location in {filters.country}</h3>
            <div className="flex flex-wrap gap-2">
              {locations
                .filter((location: Location) => location.country === filters.country)
                .map((location: Location) => (
                  <button
                    key={location.name}
                    onClick={() => updateFilters({ location: location.name })}
                    className={`px-3 py-1 rounded-full flex items-center text-xs ${
                      location.name === filters.location
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <MapPin size={12} className="mr-1" />
                    {location.name}
                  </button>
                ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="font-medium mb-2 text-sm">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category: Category) => (
              <CategoryItem 
                key={category.name} 
                name={category.name} 
                onClick={() => updateFilters({ category: category.name, subcategory: null })}
                isActive={category.name === filters.category}
              />
            ))}
          </div>
        </div>

        {filters.category && (
          <div>
            <h3 className="font-medium mb-2 text-sm">Subcategories</h3>
            <div className="flex flex-wrap gap-2">
              {categories
                .find((c: Category) => c.name === filters.category)
                ?.subcategories.map((subcategory: string) => (
                  <button
                    key={subcategory}
                    onClick={() => updateFilters({ subcategory })}
                    className={`px-3 py-1 rounded-lg text-xs ${
                      subcategory === filters.subcategory
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {subcategory}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterSection;