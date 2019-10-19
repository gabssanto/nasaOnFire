import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

import Mapa from "./pages/Map";
import ButtonArea from './pages/ButtonArea';
import Report from './pages/Report';
//import Feed from './pages/Feed';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Mapa: {
                screen: Mapa
            },
            ButtonArea: {
                screen: ButtonArea,
            },
            Report: {
                screen: Report,
            },
            
        },
        {
            headerBackTitleVisible: false,
        }
    )
)

export default Routes;