import { Route, Switch, BrowserRouter } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={JournalScreen} />
				<Route path='/auth' component={AuthRouter} />
			</Switch>
		</BrowserRouter>
	);
};
