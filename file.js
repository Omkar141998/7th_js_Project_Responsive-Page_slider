(function () {
    const customerImage = document.querySelector('#fd-images')
    const customerName = document.querySelector('#fd-Name')
    const customerText = document.querySelector('#about-myfd')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpg`
        let customer = new  Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'Omkar', 'My name is Omkar ... Dost toh sabko milte haiii.... Par Chutiya Dost naseeb wallon ko hi milte haii..🤔🤪.Zindagi mein tension konsi kam hai Ye jo kamine dost sath h mere To fir kya gum hai Ye thoda bahut jo gum hai Usko bhi bana dete ye fun hai🤣🤣')
    createCustomer(1, 'Manish: Chutiya 1', 'I am a manish : 🤔🤪Kissi bhi chiz ko poore dil se mat chaho,Kaynaat chutiya banati hai..🤣🤣🤣🤣our mai kisi ko chahne laga, or mere dost ko batane gaya, fir ye ho gaya.🤣🤣.. Ae dost kya karu  mein bebas hu Meri Zindagi mein dard bahut hai Vo bola Iodex laga dard bhaga Mard ban, Sir-dard mat ban')
    createCustomer(2, 'Lokesh: Chutiya 2', 'I am Lokesh:- I am Akhand chutiya,🤣 kya karu bhai ab Zindagi ke us stage pe aagaya hu jahaan jo bhi milta hai Chutiya lagta hai...Hum dosto ki baatcheet Itni ajeeb or funny hoti hai ki😵🥴 Agar hum logo ki baat koi  sun le To hume pagalkhane mein bharti na kar de')
    createCustomer(3, 'ruchika: Chutiya 3', 'Mai ak Chotisi Nanhi si Bachhi hu,🤣🤣 lokesh asked ruchika:- Tum itna Jo muskura rahi ho Sach mein kisi ke liye pyaar hain ya bas chutiya bana rahi ho.🤣🤣.?')
    createCustomer(4, 'Ashwin:- 4th and last chutiya', 'Mai bahut shant or acha baccha tha fir mere life me ye log aaye🤔🤪 : or Inhone meko pura bigad ka rakh diya:- Dost hai ye mera Meine ise bahut kareeb se hai jaana Dikhta sharif hai  Dikhta sharif hai  Lekin hai dedh shyana,Sharif to mein bhi tha bhai Bus tujhse dosti kya ho gai Sari galiya muhjubani ho gai🤣🤣')


    btn.forEach(function(button){
        button.addEventListener('click', function(e) {
            if (e.target.parentElement.classList.contains('leftBtn')){
                if(index === 0){
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text

            }

            if(e.target.parentElement.classList.contains('rightBtn')){
                index++
                if(index === customers.length){
                    index = 0
                }
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text


            }
        })
    })

})()