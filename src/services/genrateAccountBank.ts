function generateAccountNumber(): string {
    let account_number = '';

    for (let i=0; i<6; i++) {
        const number = Math.floor(Math.random() * 10);
        account_number = account_number + String(number);
    }
    return account_number;
}

export { generateAccountNumber };