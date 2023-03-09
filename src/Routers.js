import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Admin from './pages/Admin'
import { AuthContext } from "./context/AuthContext"
import Us from './components/Us/Us'
import Men from './components/Mens/Men/Men'
import Women from './components/Womens/Women/Women'
import Exchanges from './components/Exchanges/Exchanges'
import Kids from "./components/Kids/Kids"
import Sales from './components/Sales/Sales'
import Help from './components/Help/Help'
function Routers() {
    const { getAdmin } = useContext(AuthContext)
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='Admin' element={getAdmin ? <Admin /> : <div style={{ width: "100%", height: "100vh", background: "black", display: "flex", alignItems: "center", justifyContent: "center" }}><h1 style={{ color: "#FFF", }}>KECHIRASIZ <br /> SIZ ADMIN EMASMIZ SUNING UCHUN BU YERDAN FOYDALANA OLMAYSIZ <br /><br /> EXCUSE  ME <br />
                    YOU CAN USE THIS SITE BECAUSE YOU ARE NOT AN ADMIN <br /> <br /> МНЕ ЖАЛЬ <br />
                    ВЫ НЕ МОЖЕТЕ ПОЛЬЗОВАТЬСЯ ЭТИМ САЙТОМ, ПОТОМУ ЧТО ВЫ НЕ АДМИН</h1>
                </div>} />
                <Route path='us' element={<Us />} />
                <Route path='men' element={<Men />} />
                <Route path='women' element={<Women />} />
                <Route path='excan' element={<Exchanges />} />
                <Route path='kids' element={<Kids />} />
                <Route path='sales' element={<Sales />} />
                <Route path='help' element={<Help />} />
            </Routes>
        </div>
    )
}

export default Routers