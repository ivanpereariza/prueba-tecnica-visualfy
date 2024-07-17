export interface Alert {
    _id: string,
    data: {
        last_month_hits: number 
    },
    image?: string,
    title: string,
    type: string
}

export interface QueryAlerts {
    name?: string,
    priority?: string
}

export interface BodyCreateAlert {
    title: string,
    priority: string,
    image?: File,
    type: string
}

export type BodyCreateAlertKeys = keyof BodyCreateAlert;