type Address = {
    cep: string,
    default: boolean
};

const addresses : Address[] = [
    {cep: "234234", default: true},
    {cep: "767676", default: false},
    {cep: "909090", default: false},
];


type Customer = {
    addresses: Address[]
}


const customer : Customer = {
    addresses : addresses,
}


export function getPrincipalAddress(customer: Customer): Address | undefined{
    return customer.addresses.find(address => address.default)
}

const principalAddress = getPrincipalAddress(customer)

console.log(principalAddress)