// react lib
import React from 'react';

// define rotas da minha app
import routes from './routes';

// create do ReactRouter, responsavel pelo roteamento da App
import { create } from 'react-router';

const router = create({routes});
const container = document.getElementById('app-container');

router.run((Handler) => React.render((<Handler/>), container));
