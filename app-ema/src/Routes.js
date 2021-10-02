import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Main from './Main'
import Aluno from './Aluno'

function Routes() {
    return (
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/Aluno" component={Aluno} />

            </Switch>
    );
};

export default Routes