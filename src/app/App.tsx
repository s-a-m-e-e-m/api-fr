import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import PublicRoute from "../components/common/PublicRoute"
import Login from "../features/auth/pages/Login"
import Signup from "../features/auth/pages/Signup"
import ProtectedRoute from "../components/common/ProtectedRoute"
import Home from "../features/dashboard/pages/Dashboard"
import CreateEndpoint from "../features/endpoint/pages/CreateEndpoint"
import Endpoint from "../features/endpoint/pages/Endpoint"
import HealthLog from "../features/health/pages/HealthLogs"
import Incident from "../features/incident/pages/Incident"
import Alerts from "../features/alert/pages/Alerts"
import Incidents from "../features/incident/pages/Incidents"
import IncidentsEndpoint from "../features/incident/pages/IncidentsEndpoint"
import AlertsEndpoint from "../features/alert/pages/AlertsEndpoint"
import AppLayout from "../components/layout/AppLayout"


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup/>
              </PublicRoute>
            }
          />

          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={ <Home /> } />
            <Route path="/create-endpoint" element={ <CreateEndpoint /> }/>
            <Route path="/endpoint/:id" element={ <Endpoint /> } />
            <Route path="/healthlogs/:id" element={ <HealthLog /> } />
            <Route path="/incidents" element={ <Incidents /> } />
            <Route path="/incident/:id" element={ <Incident /> } />
            <Route path="/incidents/endpoint/:id" element={ <IncidentsEndpoint /> } />
            <Route path="/alerts" element={ <Alerts /> } />
            <Route path="/alerts/endpoint/:id" element={ <AlertsEndpoint /> } />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App