const rupiahFormatter = (currency: string | number) => {
    const num = typeof currency === 'string' ? parseInt(currency) : currency

    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(num)
}

export { rupiahFormatter }