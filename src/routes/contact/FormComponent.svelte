<script>
	import contactImage from '$lib/images/contactImage.svg';
	import { contactsCollection } from '../../firebaseConfig';
	import { collection, addDoc } from 'firebase/firestore';

	let name = '';
	let email = '';
	let message = '';

	async function submitForm() {
		console.log('code reaches here');
		try {
			const docRef = await addDoc(contactsCollection, {
				name,
				email,
				message
			});

			name = '';
			email = '';
			message = '';

			console.log('Document written with ID: ', docRef.id);
		} catch (error) {
			console.error('Error adding document: ', error);
		}
	}
</script>

<div class="flex flex-col items-center justify-center h-[91vh] bg-[#177fbf] p-4">
	<div class="w-8/12 flex items-center justify-center">
		<form
			class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex w-10/12 items-center justify-evenly"
			on:submit|preventDefault={submitForm}
		>
			<div>
				<h2 class="text-xl text-center font-bold mb-6">Contact Us</h2>
				<div class="mb-4">
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Name"
						bind:value={name}
					/>
				</div>
				<div class="mb-6">
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						type="email"
						placeholder="Email"
						bind:value={email}
					/>
				</div>
				<div class="mb-6">
					<textarea
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Message"
						bind:value={message}
					/>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Send
					</button>
				</div>
			</div>
			<img src={contactImage} alt="Form" class="w-80 ml-10" />
		</form>
	</div>
</div>
