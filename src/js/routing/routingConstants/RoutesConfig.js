//URLs
import { getHomePageUrl, getNotFoundPageUrl, getUsersPageUrl } from './AppUrls';
//pages
import HomePage from '../../containers/pages/HomePage';
import UsersPage from '../../containers/pages/UsersPage';
import NotFoundPage from '../../containers/pages/notFoundPage/NotFoundPage';

export const routes = [
	{
		path: getHomePageUrl(),
		Component: HomePage,
		exact: true,
	},
	{
		path: getUsersPageUrl(),
		Component: UsersPage,
	},
	{
		path: getNotFoundPageUrl(),
		Component: NotFoundPage,
	},
];
