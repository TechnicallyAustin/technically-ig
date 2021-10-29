# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

post = Post.create( [{ url: 'https://qph.fs.quoracdn.net/main-qimg-2563faf65a7db853eb03421976d6091f-lq'}, {caption: 'First Post!'}, {likes: 17}])
#post = Post.create([{ url: 'https://photos.app.goo.gl/1zQY28LdinY7eQ616'},{caption: 'Second Post!'}, {likes: 25}])
#post = Post.create([{ url: 'https://photos.app.goo.gl/HDrQo5hbk7mTF6zt7'},{caption: 'Third Post!'}, {likes: 80}])
#post = Post.create([{ url: 'https://photos.app.goo.gl/LaWKFR3WbqmYFd658'},{caption: 'Fourth Post!'}, {likes: 75}])
#post = Post.create([{ url: 'https://photos.app.goo.gl/2cRfhXJrq3uVYaNN7'},{caption: 'Fifth Post!'}, {likes: 10}])
#post = Post.create([{ url: 'https://photos.app.goo.gl/JVS6n1s59fRw4wuX8'},{caption: 'Sixth Post!'}, {likes: 38}])


Post.destroy_all

Post.create!([{
    url: '/Users/austinjohnson/Development/Projects/technically-ig/technically-ig-backend/assets/picture1.jpg',
    caption: 'First Post!',
    likes: 17
},
{
    url: '/Users/austinjohnson/Development/Projects/technically-ig/technically-ig-backend/assets/picture2.jpg',
    caption: 'Second Post!',
    likes: 133
},
{
    url:'/Users/austinjohnson/Development/Projects/technically-ig/technically-ig-backend/assets/picture4.jpg' ,
    caption: 'Third Post!',
    likes: 170
},
{
    url: '/Users/austinjohnson/Development/Projects/technically-ig/technically-ig-backend/assets/picture5.jpeg',
    caption: 'Fourth Post!',
    likes: 10
},
{
    url: '/Users/austinjohnson/Development/Projects/technically-ig/technically-ig-backend/assets/picture6.jpeg',
    caption: 'Fifth Post!',
    likes: 66,
},
{
    url: '/Users/austinjohnson/Development/Projects/technically-ig/technically-ig-backend/assets/picture7.jpeg',
    caption: 'Sixth Post!',
    likes: 66
}
    ])