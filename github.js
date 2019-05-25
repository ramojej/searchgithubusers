class GitHub {
    constructor() {
        this.client_id = 'a130e62cdc4217e1573a';
        this.client_secret = 'd82fb121d602676936e766d818f236161319beab';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}