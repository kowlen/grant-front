<template>
  <div class="card-profile">
    <div class="profile__role">
      <div class="base-badge" >
        Пользователь
      </div>
    </div>
    <div class="profile__avatar">
        <div class="avatar_wrap">
          <div class="avatar"></div>
        </div>
      <div class="profile__name">Иванов <br> Иван</div>
    </div>

    <div class="profile__action">
      <my-btn>профиль</my-btn>
      <my-btn>обновить</my-btn>
    </div>
  </div>
</template>

<script>
import MyBtn from "../../buttons/myBtn";
export default {
name: "profileCard",
  components: {MyBtn}
}
</script>

<style scoped>
  .card-profile{
    padding: 16px;
    border-bottom: 1px solid #dde2e5;
    display: grid;
    row-gap: 20px;
  }

  .profile__action{
    display: flex;
    justify-content: space-around;
  }

  .base-badge {
    position: relative;
    display: inline-block;
    padding: 3px 8px 2px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 4px;
    color: #fff;
    background-color: #faa419;
  }

  .profile__name{
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  .profile__avatar .avatar_wrap{
    width: 144px;
    height: 144px;
    position: relative;
    overflow: visible;
  }

  .profile__avatar .avatar_wrap img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    max-width: 100% ;
  }

  .profile__avatar .avatar_wrap .avatar{
    width: 100%;
    height: 100%;
    background-image: url("/assets/icons/avatar.jpg");
    background-repeat: no-repeat;
    background-position: center 40%;
    background-size: 110%;
    border-radius: 50%;
  }

  .profile__name, .profile__avatar{
    display: grid;
    justify-content: center;
    row-gap: 10px;
    text-align: center;
  }
</style>
