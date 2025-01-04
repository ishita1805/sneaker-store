const products = [
    {
        id: 'porsche-911',
        label: 'Porsche 911 - Nike Dunks',
        cost: 'INR 26,000',
        pictures: ['https://images.unsplash.com/photo-1579446650032-86effeeb3389?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1622920883841-5bf72e392d8f?q=80&w=4359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1596122787821-95c4255bb936?q=80&w=3954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1529085216271-4f5b495a450b?q=80&w=4160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    },
    {
        id: 'batman-joker',
        label: 'Batman & Joker - Nike AF1s',
        cost: 'INR 18,000',
        pictures: ['https://images.unsplash.com/photo-1622920883841-5bf72e392d8f?q=80&w=4359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1596122787821-95c4255bb936?q=80&w=3954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1579446650032-86effeeb3389?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    },
    {
        id: 'buttercup-green',
        label: 'Buttercup - Nike AF1s',
        cost: 'INR 19,000',
        pictures: ['https://images.unsplash.com/photo-1596122787821-95c4255bb936?q=80&w=3954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1579446650032-86effeeb3389?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1622920883841-5bf72e392d8f?q=80&w=4359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    },
    {
        id: 'porsche-911',
        label: 'Porsche 911 - Nike Dunks',
        cost: 'INR 26,000',
        pictures: ['https://images.unsplash.com/photo-1579446650032-86effeeb3389?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1622920883841-5bf72e392d8f?q=80&w=4359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1596122787821-95c4255bb936?q=80&w=3954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    },
    {
        id: 'batman-joker',
        label: 'Batman & Joker - Nike AF1s',
        cost: 'INR 18,000',
        pictures: ['https://images.unsplash.com/photo-1622920883841-5bf72e392d8f?q=80&w=4359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1596122787821-95c4255bb936?q=80&w=3954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1579446650032-86effeeb3389?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    },
    {
        id: 'buttercup-green',
        label: 'Buttercup - Nike AF1s',
        cost: 'INR 19,000',
        pictures: ['https://images.unsplash.com/photo-1596122787821-95c4255bb936?q=80&w=3954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1579446650032-86effeeb3389?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1622920883841-5bf72e392d8f?q=80&w=4359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    },
];

export default products;
