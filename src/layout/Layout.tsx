import React from 'react';
import "./styles/Layout.scss";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import AppData from '../core/app/AppData';
import BuildResume from '../pages/BuildResume';
import DialogerWrap from '../Dialoger/DialogerWrap';
import LoginSupport from '../components/login/LoginSupport';
import LoginLoading from '../components/login/LoginLoading';


interface AnimatorProps {
    element: React.ReactNode;
    title: string;
}

function Layout() {
    const location = useLocation();

    return (
        <section id="layout" className="transition-all">
            <Header />
            <AnimatePresence initial={false} mode="wait">
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<Animator title="" element={<AuthNavigate element={<LandingPage />} />} />} />
                    <Route path="/build" element={<Animator title="Build Resume" element={<AuthVerify element={<BuildResume />} />} />} />
                    <Route path="/dashboard" element={<Animator title="Dashboard" element={<AuthVerify element={<LandingPage />} />} />} />
                    <Route path="/about" element={<Animator title="About us" element={<LandingPage />} />} />
                    <Route path="/contact" element={<Animator title="Contact" element={<LandingPage />} />} />
                </Routes>
            </AnimatePresence>
            <Footer />
            <DialogerWrap />
        </section>
    );
}

export default Layout;

function AuthVerify({ element }: { element: React.ReactNode }) {
    const [user, loading] = [false, false]; //useAuthState(firebase.auth);

    if (loading) return (<LoginLoading />);
    if (!user) return (<LoginSupport />);
    return (<>{element}</>);
}

function AuthNavigate({ element }: { element: React.ReactNode }) {
    const [user] = [false]; //useAuthState(firebase.auth);

    if (user) return (<><Navigate to="/dashboard" replace /></>);
    return (<>{element}</>);
}


function Animator({ element, title }: AnimatorProps) {

    React.useEffect(() => {
        let publish = "";
        if (title) publish += title + " • ";
        window.document.title = publish + AppData.name;
    }, [title]);
    return (
        <motion.section
            transition={{ duration: 0.1 }}
            initial={{ y: '100dvh' }}
            animate={{
                y: '0',
                transition: {
                    type: "spring",
                    mass: 0.4,
                },

            }}
            exit={{ opacity: 0 }}
            style={{ minHeight: "calc(100dvh - 200px)" }}
        >
            {element}
        </motion.section>
    );
}