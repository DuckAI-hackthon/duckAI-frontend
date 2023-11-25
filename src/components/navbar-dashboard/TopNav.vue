<script>
import ButtonUser from '../ButtonUser.vue'
export default {
    components: {
        ButtonUser
    }
}
</script>

<template>
    <div class="absolute right-0 top-0 p-4">
        <div class="cursor-pointer flex flex-row items-center justify-center text-center gap-3">
            <IconButton class="hover:opacity-70 transition-all" @click="this.$emit('changeToolNav', 'InfoTools');" >
                <svg width="129" height="36" viewBox="0 0 129 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="129" height="44" rx="8" fill="#212121"/>
                    <path d="M51.024 16.454V29H49.386V16.454H51.024ZM58.3157 18.956C59.5157 18.956 60.4877 19.322 61.2317 20.054C61.9757 20.774 62.3477 21.818 62.3477 23.186V29H60.7277V23.42C60.7277 22.436 60.4817 21.686 59.9897 21.17C59.4977 20.642 58.8257 20.378 57.9737 20.378C57.1097 20.378 56.4197 20.648 55.9037 21.188C55.3997 21.728 55.1477 22.514 55.1477 23.546V29H53.5097V19.136H55.1477V20.54C55.4717 20.036 55.9097 19.646 56.4617 19.37C57.0257 19.094 57.6437 18.956 58.3157 18.956ZM68.7314 20.486H66.6614V29H65.0234V20.486H63.7454V19.136H65.0234V18.434C65.0234 17.33 65.3054 16.526 65.8694 16.022C66.4454 15.506 67.3634 15.248 68.6234 15.248V16.616C67.9034 16.616 67.3934 16.76 67.0934 17.048C66.8054 17.324 66.6614 17.786 66.6614 18.434V19.136H68.7314V20.486ZM74.6372 29.162C73.7132 29.162 72.8732 28.952 72.1172 28.532C71.3732 28.112 70.7852 27.518 70.3532 26.75C69.9332 25.97 69.7232 25.07 69.7232 24.05C69.7232 23.042 69.9392 22.154 70.3712 21.386C70.8152 20.606 71.4152 20.012 72.1712 19.604C72.9272 19.184 73.7732 18.974 74.7092 18.974C75.6452 18.974 76.4912 19.184 77.2472 19.604C78.0032 20.012 78.5972 20.6 79.0292 21.368C79.4732 22.136 79.6952 23.03 79.6952 24.05C79.6952 25.07 79.4672 25.97 79.0112 26.75C78.5672 27.518 77.9612 28.112 77.1932 28.532C76.4252 28.952 75.5732 29.162 74.6372 29.162ZM74.6372 27.722C75.2252 27.722 75.7772 27.584 76.2932 27.308C76.8092 27.032 77.2232 26.618 77.5352 26.066C77.8592 25.514 78.0212 24.842 78.0212 24.05C78.0212 23.258 77.8652 22.586 77.5532 22.034C77.2412 21.482 76.8332 21.074 76.3292 20.81C75.8252 20.534 75.2792 20.396 74.6912 20.396C74.0912 20.396 73.5392 20.534 73.0352 20.81C72.5432 21.074 72.1472 21.482 71.8472 22.034C71.5472 22.586 71.3972 23.258 71.3972 24.05C71.3972 24.854 71.5412 25.532 71.8292 26.084C72.1292 26.636 72.5252 27.05 73.0172 27.326C73.5092 27.59 74.0492 27.722 74.6372 27.722Z" fill="white"/>
                </svg>
            </IconButton>
            <IconButton class="hover:opacity-70 transition-all" @click="this.$emit('changeToolNav', 'TraductionToolComponent');" >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 44 44"
                    fill="none"
                >
                    <rect width="44" height="44" rx="8" fill="#212121" />
                    <path
                    d="M13 16.6005H19.3954M19.3954 16.6005H23.5067M19.3954 16.6005V15M25.7908 16.6005H23.5067M23.5067 16.6005C22.7571 18.7892 21.1872 20.8582 19.3954 22.6766M19.3954 22.6766C17.9117 24.1822 16.2757 25.516 14.8273 26.6034M19.3954 22.6766C18.4818 21.802 17.02 20.0415 16.6545 19.4013M19.3954 22.6766L22.1363 25.003"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    d="M23.5068 29.4043L24.5509 27.0035M24.5509 27.0035L27.1613 21.0018L29.7716 27.0035M24.5509 27.0035H29.7716M30.8158 29.4043L29.7716 27.0035"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                </svg>
            </IconButton>
            <IconButton class="hover:opacity-70 transition-all" @click="this.$emit('changeToolNav', 'GenerationTextToolComponent')" >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 44 44"
                    fill="none"
                >
                    <rect width="44" height="44" rx="8" fill="#212121" />
                    <path
                    d="M14 31.4V12.6C14 12.2686 14.2686 12 14.6 12H26.2515C26.4106 12 26.5632 12.0632 26.6757 12.1757L29.8243 15.3243C29.9368 15.4368 30 15.5894 30 15.7485V31.4C30 31.7314 29.7314 32 29.4 32H14.6C14.2686 32 14 31.7314 14 31.4Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    d="M18 20H26"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    d="M18 28H26"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    d="M18 24H22"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    d="M26 12V15.4C26 15.7314 26.2686 16 26.6 16H30"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                </svg>
            </IconButton>
            <IconButton class="hover:opacity-70 transition-all" @click="this.$emit('changeToolNav', 'GenerationKeyWordToolComponent')" >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 44 44"
                    fill="none"
                >
                    <rect width="44" height="44" rx="8" fill="#212121" />
                    <path
                    d="M24.2 22.4C24.2 24.83 26.17 26.8 28.6 26.8C31.03 26.8 33 24.83 33 22.4C33 19.9699 31.03 18 28.6 18C26.17 18 24.2 19.9699 24.2 22.4ZM24.2 22.4H11V25.7"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    d="M15.4 22.4V25.7"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                </svg>
            </IconButton>
            <IconButton class="hover:opacity-70 transition-all" @click="this.$emit('changeToolNav', 'QuestionAndAnswerToolComponent')" >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 44 44"
                    fill="none"
                >
                    <rect width="44" height="44" rx="8" fill="#212121" />
                    <path
                    d="M16 15.6789C16 8.10698 27.8987 8.10705 27.8987 15.679C27.8987 21.0874 22.4902 20.0056 22.4902 26.4958"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    d="M22.504 33.0204L22.5202 33.0024"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                </svg>
            </IconButton>
            <ButtonUser />
        </div>
    </div>
</template>