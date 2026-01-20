import { useState } from 'react';
import { OrderProvider } from './context/OrderContext';
import OrdersTable from './components/OrdersTable';
import DeliveredTable from './components/DeliveredTable';

function App() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <OrderProvider>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <main className="p-6">
          {/* Waytoform Delivery Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-yellow-500">waytoform</span>
              <span className="text-gray-800"> Delivery</span>
            </h1>
            <p className="text-gray-600">Delivery Partner Management System</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'orders'
                  ? 'bg-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-100 border border-yellow-300'
              }`}
            >
              Orders
            </button>
            <button
              onClick={() => setActiveTab('delivered')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'delivered'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-100 border border-green-300'
              }`}
            >
              Delivered
            </button>
          </div>

          {/* Content */}
          {activeTab === 'orders' && <OrdersTable />}
          {activeTab === 'delivered' && <DeliveredTable />}
        </main>
      </div>
    </OrderProvider>
  );
}

export default App;
