// 1. Define route components.
// These can be imported from other files
import CalendarioPrenotazioni from '@/forms/CalendarioPrenotazioni';
import AccettazioneMedsport from '@/forms/Accettazioni/AccettazioneMedsport';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
export const routes = [
    { 
        path: '/',
        name: 'calendario',
        component: CalendarioPrenotazioni 
    },
    { 
        path: '/accettazione/medsport', 
        name: 'accettazione-medsport',
        component: AccettazioneMedsport 
    },
    { 
        path: '/accettazione/ambulatoriale', 
        name: 'accettazione-ambulatoriale',
        component: AccettazioneMedsport 
    },
    { 
        path: '/accettazione/fisioterapia', 
        name: 'accettazione-fisioterapia',
        component: AccettazioneMedsport 
    },
    { 
        path: '/accettazione/cardiologia', 
        name: 'accettazione-cardiologia',
        component: AccettazioneMedsport 
    },
]