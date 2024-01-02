
    
<section id="form">
    <div class="full-form">
        <h1 class="main-header">
            contact us
        </h1>
        <div class="main-form">
            <form action="#" id="form" method="post">
                <div class="name-area-flex">
                    <div class="first-name-area">
                        <label for="firstName" class="label-font">firstName :</label>
                        <input type="text" placeholder="jhon" id="firstName" required>
                    </div>
                    <div class="last-name-area">
                        <label for="lastName" class="label-font">lastName :</label>
                        <input type="text" placeholder="doe" id="lastName" required>
                    </div>
                </div>
                <div class="name-area-flex">
                    <div class="first-name-area">
                        <label for="Mail" class="label-font">Mail :</label>
                        <input type="email" placeholder="jhon@gmail.com" id="Mail" required>
                    </div>
                    <div class="last-name-area">
                        <label for="Phone" class="label-font">Phone :</label>
                        <input type="number" placeholder="(+88) 01*********" id="Phone" required>
                    </div>
                </div>
                <div class="flex-area-queary">
                    <div class="age">
                        <label for="age" class="label-font">Your age :</label>
                        <input id="age" type="number" min="18" max="30" placeholder="Your age" required>
                    </div>
                    <div class="sex">
                        <div class="sex-name">
                            <label class="label-font">Sex : </label>
                        </div>
                        <div class="sex-label">
                            <select name="select" id="select">
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                                <option value="3">Both</option>
                            </select>
                        </div>
                    </div>
                    <div class="nationality">
                        <div class="nation">
                            <label class="label-font">Nationality :</label>
                        </div>
                        <select> 
                            <option value="0">Bangladeshi</option>
                            <option value="1">Indian</option>
                            <option value="2">Pakistani</option>
                            <option value="3">Afgani</option>
                            <option value="4">Nepali</option>
                        </select>
                    </div>
                </div>
                <div class="label">
                    <label class="label-font" for="massageBox">
                        Massage :
                    </label>
                </div>
                <textarea name="" id="massageBox" cols="60" rows="10" placeholder="Type your massage...."></textarea>
                <button class="btn label-font" onclick="myFunction()">
                    Send mesasge
                </button>
            </form>
            <div id="demo">

            </div>
        </div>
    </div>
</section>
