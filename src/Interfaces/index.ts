export interface IAction {
    type: string
    payload: any,
    value: any
}

export interface IData {
    SYMBOL ?: string,
    BID ?: string,
    BID_SIZE ?: string,
    ASK ?: string,
    ASK_SIZE ?: string,
    DAILY_CHANGE ?: string,
    DAILY_CHANGE_RELATIVE : string,
    LAST_PRICE : string,
    VOLUME : string,
    HIGH : string,
    LOW : string
}

//msg---> [371279,[47200,11.537470349999998,47201,13.83211126,1167,0.0254,47201,3262.19696015,47444,45756.13501462]]