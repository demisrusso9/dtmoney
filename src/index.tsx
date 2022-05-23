import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Call of Duty Ghosts',
          type: 'withdraw',
          category: 'Games',
          amount: 65.67,
          createdAt: new Date('2022-05-20 18:59:00')
        },
        {
          id: 2,
          title: 'Salário',
          type: 'deposit',
          category: 'Salário',
          amount: 2800,
          createdAt: new Date('2022-05-25 07:15:00')
        },
        {
          id: 3,
          title: 'Dinheiro de mãe',
          type: 'withdraw',
          category: 'Salário Mãe',
          amount: 250,
          createdAt: new Date('2022-05-25 07:25:00')
        },
        {
          id: 4,
          title: 'Dizimo do Senhor',
          type: 'withdraw',
          category: 'Dizimo',
          amount: 300,
          createdAt: new Date('2022-05-25 07:17:00')
        }
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
