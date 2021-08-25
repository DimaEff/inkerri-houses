export const getHomeRoute = () => '/';
export const getNewsRoute = () => `/news`;
export const Route = () => `/houses`;
export const getNewsItemRoute = (newsItemId = ':newsItemId?') => `/news/${newsItemId}`;
export const ItemRoute = (houseId = ':houseId?') => `/houses/${houseId}`;
export const getPhotosRoute = () => '/photos';
export const getScandinavianRoute = () => '/scandinavian';
export const getDesigningRoute = () => '/designing';
export const getConsultingRoute = () => '/consulting';