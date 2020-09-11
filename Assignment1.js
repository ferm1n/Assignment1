const users = [
    {
        id: 1,
        username: 'elmer.datolayta@gmail.com',
        password: 'TempPassword101',
        roleID: 1,
    },
    {
        id: 2,
        username: 'john.doe@gmail.com',
        password: 'johndoe1',
        roleID: 3,
    },
    {
        id: 3,
        username: 'josephine.doe@gmail.com',
        password: 'josephine123',
        roleID: 3,
    },
    {
        id: 4,
        username: 'ruby.doe@gmail.com',
        password: 'ruby101',
        roleID: 2,
    },
  ];
  const roles = [
    { id: 1,
      label: 'Aministrator',
    },
    { id: 2,
        label: 'Student',
      },
      { id: 3,
        label: 'Instructor',
      },
  ];
  const filteredUsers = users.reduce((usersData, user) => {
  const { id, username, roleID } = user;  
  const roleLabel = roles.filter((role) => role.id == roleID);
  
  const newUser = {
    id: id,
    role: roleLabel[0].label,
    username: username,
    
  };
  return [...usersData, newUser];
  
  }, []);
  console.log(filteredUsers);