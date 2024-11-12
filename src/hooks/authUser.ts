export const signIn = async (cpf: string, password: string) => {
	const api = 'https://oxebanking-middleend.onrender.com';
	const response = await fetch(`${api}/sign-in`, {
		method: 'POST',
		body: JSON.stringify({ cpf, user_password: password }),
  });
	const data = await response.json();
	if (response.ok) {
		const { token } = data;
		document.cookie = `auth-token=${token}; path=/; max-age=86400; secure; samesite=strict`;
  }
	return response.json();
};

export const signOut = async () => {
	document.cookie = 'auth-token=; path=/; max-age=0; secure; samesite=strict';
};