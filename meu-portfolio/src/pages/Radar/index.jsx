import './styles.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SubMenu from './components/SubMenu'
import Top3 from './components/Top3'

export default function Radar() {
    return (
        <>
            <Header />
            <SubMenu />
            <Top3/>
            <Footer />
        </>
    )
}