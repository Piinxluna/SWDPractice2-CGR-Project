export default async function updateUser(
    token: string,
    uid : string,
    role : string
  ) 
  {
    let bodyData = {role:role}
  
    console.log(bodyData)
  
    const response = await fetch(`${process.env.BACKEND_URL}/api/users/${uid}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    })
  
    if (!response.ok) {
      throw new Error("Cannot update user's role")
    }
  
    return await response.json()
  }
  