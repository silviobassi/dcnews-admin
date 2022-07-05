import { Route, Routes } from 'react-router-dom';
import HomeView from './views/Home.view';
import CashFlowExpensesView from './views/CashFlowExpenses.view';
import CashFlowRevenuesView from './views/CashFlowRevenues.view';
import PaymentCreateView from './views/PaymentCreate.view';
import PaymentListView from './views/PaymentList.view';
import UserListView from './views/UserList.view';
import UserCreateView from './views/UserCreate.view';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path={'/'} element={<HomeView />} />
      <Route
        path={'/user/create'}
        element={<UserCreateView />}
      />
      <Route
        path={'/users'}
        element={<UserListView />}
      />
      <Route
        path={'/payment/create'}
        element={<PaymentCreateView />}
      />
      <Route
        path={'/payments'}
        element={<PaymentListView />}
      />
      <Route
        path={'/cash-flow/expenses'}
        element={<CashFlowExpensesView />}
      />
      <Route
        path={'/cash-flow/revenues'}
        element={<CashFlowRevenuesView />}
      />
    </Routes>
  );
}
