import { COCKTAIL_TYPES_ROUTE_OVERVIEW_MAP } from '../_domain/entity/cocktail/cocktail-types-route-overview';
import DynamicRoute, { AppRouteDto } from '../common/dynamic-route';

const COCKTAIL_TYPES_ROUTE_MAP: AppRouteDto[] = [...COCKTAIL_TYPES_ROUTE_OVERVIEW_MAP];

const COCKTAIL_TYPES_ROUTE_ITEMS = COCKTAIL_TYPES_ROUTE_MAP.map(DynamicRoute);

export { COCKTAIL_TYPES_ROUTE_ITEMS };
