function domainType(domains) {
    const domainsObj = {
        com: 'commercial',
        org: 'organization',
        net: 'network',
        info: 'information',
    };
    const result = [];

    for (const line of domains) {
        const periodIndex = line.lastIndexOf('.');
        const domain = line.substring(periodIndex + 1);
        result.push(domainsObj[domain]);
    }

    return result;
}

console.log(
    domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'])
);
