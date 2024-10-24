const API_URL = process.env.NEXT_PUBLIC_BACKEND;

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
}

export const uploadProfilePicture = async (
  file: File
): Promise<{ fileName: string }> => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch(`${API_URL}/users/profile-picture`, {
    method: 'POST',
    body: formData,
  });
  return handleResponse<{ fileName: string }>(response);
};

export const getProfilePictureUrl = async (
  fileName: string
): Promise<string> => {
  const response = await fetch(
    `${API_URL}/users/profile-picture/${encodeURIComponent(fileName)}`
  );
  const data = await handleResponse<{ url: string }>(response);
  return data.url;
};
