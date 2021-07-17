import PaymentStatus from "./PaymentStatusEnum"
export function datasMock() {
    const datas = [
        {
            id: 1,
            nome: 'Carlos Alberto',
            description: 'Descrição 1',
            situation: 'Atendimento',
            scheduledDay: '16/07/2021',
            beforeTheTime: '08:00',
            startTime: '10:00',
            afterTheTime: '11:00',
            servicePrice: '150',
            paymentStatus: PaymentStatus.CONFIRMADO,
            image: ''
        },
        {
            id: 2,
            nome: 'Roberto Marinho',
            description: 'Descrição 1',
            patientSituation: 'Atendimento',
            scheduledDay: '16/07/2021',
            beforeTheTime: '08:00',
            startTime: '10:00',
            afterTheTime: '11:00',
            servicePrice: '150',
            paymentStatus: PaymentStatus.PAGAR_AGORA,
            image: ''
        },
        {
            id: 3,
            nome: 'Silvano Rocha',
            description: 'Descrição 1',
            patientSituation: 'Retorno',
            scheduledDay: '16/07/2021',
            beforeTheTime: '08:00',
            startTime: '10:00',
            afterTheTime: '11:00',
            servicePrice: '150',
            paymentStatus: PaymentStatus.CONFIRMADO,
            image: ''
        },
        {
            id: 4,
            nome: 'Jorge Mariano',
            description: 'Descrição 1',
            patientSituation: 'Retorno',
            scheduledDay: '16/07/2021',
            beforeTheTime: '08:00',
            startTime: '10:00',
            afterTheTime: '11:00',
            servicePrice: '150',
            paymentStatus: PaymentStatus.EM_ANDAMENTO,
            image: ''

        },
    ]
    return datas;
}

