import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import PageTitle from '../../components/PageTitle/PageTitle'
import './AllSkills.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2
}))

const skills = [
  {
    name: 'React',
    icon: <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
    </svg>
  },
  {
    name: 'Javascript',
    icon: <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z" />
    </svg>
  },
  {
    name: 'HTML',
    icon: <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" />

    </svg>
  },
  {
    name: 'CSS',
    icon: <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z" />
    </svg>
  },
  {
    name: 'Material UI',
    icon: <svg
      viewBox="0 0 34 32"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path
        fill="currentColor"
        d="M26.007 17.832l.033.018-.07-.027c.013 0 .026.003.037.009zm0 0c.01.008.022.012.035.014l-.07-.027.035.013zM25.964 17.964c-.025.087-.043.177-.057.267s-.032.18-.057.267l-.073-.02c.025-.088.058-.173.094-.257s.068-.169.094-.256zm0 0c-.025.087-.043.177-.057.267s-.032.179-.057.266l-.073-.02c.025-.087.058-.172.093-.256s.068-.169.093-.256zM23.919 23.335a.56.56 0 01-.235-.137c-.032-.033-.066-.064-.093-.101l-.043-.054-.039-.057a3.168 3.168 0 01-.257-.485 7.758 7.758 0 01-.198-.513 13.302 13.302 0 01-.167-.524c-.104-.351-.198-.706-.287-1.061s-.172-.712-.251-1.07a93.328 93.328 0 01-.447-2.152l-.209-1.079c-.067-.36-.136-.72-.199-1.081l.068-.002-.002.014v-.012c.064.362.132.721.199 1.082l.203 1.082c.136.721.279 1.44.43 2.158.075.359.155.717.239 1.074s.175.712.277 1.064c.101.352.214.701.356 1.039.073.168.152.333.253.486l.038.057.042.054c.027.037.06.068.091.102a.545.545 0 00.231.137h-.001l.084-.007c.028-.002.054-.013.081-.018s.053-.018.078-.029a.406.406 0 00.075-.038c.023-.015.049-.028.071-.045l.066-.053c.022-.017.04-.039.061-.058s.04-.039.058-.061.073-.086.105-.132c.016-.023.035-.045.048-.069l.042-.074.042-.073c.015-.024.026-.05.038-.075l.074-.152.005.002c-.049.1-.101.198-.159.292-.029.047-.06.093-.092.138s-.067.088-.104.13c-.018.021-.038.04-.057.06s-.041.038-.061.056-.087.069-.135.097c-.025.012-.048.028-.074.037a.559.559 0 01-.078.028c-.026.009-.054.013-.081.017s-.055.004-.083.006zm0 0c.028-.002.056-.001.083-.007s.055-.009.081-.018a.559.559 0 00.078-.028c.026-.01.049-.025.074-.037a.923.923 0 00.135-.097c.02-.019.042-.036.061-.056s.039-.039.057-.061a1.644 1.644 0 00.196-.268c.058-.095.109-.193.158-.292l.005.003-.073.152c-.013.025-.023.051-.038.075l-.042.073-.042.074c-.013.026-.032.047-.048.07-.032.047-.068.09-.104.133-.017.023-.038.042-.058.062s-.039.041-.061.059l-.066.053c-.022.018-.048.031-.071.046s-.049.028-.076.039c-.026.011-.051.024-.08.03s-.055.017-.083.019l-.086.007h-.001a.56.56 0 01-.238-.138c-.032-.033-.066-.065-.094-.102l-.043-.054-.039-.057a3.242 3.242 0 01-.26-.486c-.146-.337-.264-.686-.369-1.038s-.2-.707-.289-1.063a39.644 39.644 0 01-.251-1.072 84.103 84.103 0 01-.442-2.157c-.069-.36-.14-.72-.205-1.082s-.133-.723-.195-1.084l-.001-.006.001-.005.002-.012.035-.194.033.193c.062.361.129.721.195 1.081l.199 1.081c.134.72.273 1.439.424 2.156.075.358.155.716.239 1.072s.175.711.278 1.063c.051.176.106.35.165.524.06.173.123.345.195.513.073.168.154.333.255.486l.038.057.043.054c.027.037.061.068.092.102a.558.558 0 00.234.138zM14.964 23.335l-.052.019-.055.008a.554.554 0 01-.237-.139c-.032-.033-.066-.065-.093-.103l-.043-.054-.039-.058c-.103-.154-.184-.321-.258-.491s-.137-.344-.199-.518a14.113 14.113 0 01-.317-1.064 44.55 44.55 0 01-.39-1.619 99.775 99.775 0 01-.449-2.175l-.21-1.09-.103-.545c-.035-.183-.066-.364-.099-.547l.064.001-.008.042-.008.041v-.011c.033.182.063.362.099.542l.104.542.211 1.083c.143.721.285 1.443.441 2.162.078.359.159.718.245 1.075s.177.713.28 1.066c.102.353.217.702.359 1.039.074.167.154.332.255.484.049.077.108.146.172.21.067.06.141.112.227.136l-.004-.001a.296.296 0 00.155-.054.63.63 0 00.125-.117c.02-.021.037-.045.054-.068s.034-.047.049-.072.061-.1.089-.151c.111-.207.2-.425.281-.645l.059-.166c.021-.055.037-.111.053-.168l.099-.339.196-.679.01.003c-.116.433-.239.864-.39 1.286-.038.105-.078.21-.121.314s-.089.206-.139.306c-.024.051-.053.099-.08.148-.03.047-.057.096-.092.141-.017.022-.033.046-.051.067l-.056.062c-.02.019-.043.036-.064.055-.023.016-.048.029-.072.043zm0 0c.024-.015.049-.027.072-.044.021-.018.043-.036.063-.055l.056-.062c.018-.021.034-.045.051-.067.034-.044.061-.094.091-.141.026-.049.055-.097.079-.148a6.561 6.561 0 00.258-.62c.149-.422.271-.854.385-1.287l.01.003-.192.68-.095.34a2.055 2.055 0 01-.052.169c-.018.056-.038.111-.058.167-.08.222-.167.441-.277.651-.028.052-.056.104-.089.154-.016.025-.032.05-.05.074s-.035.048-.055.071-.082.088-.13.124a.333.333 0 01-.173.062h-.002l-.002-.001a.618.618 0 01-.244-.142 1.31 1.31 0 01-.179-.215 3.196 3.196 0 01-.264-.488c-.147-.339-.266-.689-.371-1.041s-.201-.709-.289-1.066a39.89 39.89 0 01-.249-1.076 94.14 94.14 0 01-.446-2.162l-.207-1.084-.102-.542c-.035-.18-.066-.363-.097-.544l-.001-.006.001-.005.008-.044.008-.042.034-.17.03.171.194 1.093.2 1.092c.136.727.276 1.454.428 2.178a30.1 30.1 0 00.523 2.157c.051.178.107.354.166.53.061.174.123.349.197.519s.154.337.256.491l.039.058.043.055c.027.037.061.07.093.103a.563.563 0 00.236.14l.055-.008.052-.019zM5.744 23.335c-.028-.03-.069-.043-.101-.067-.017-.011-.034-.023-.049-.036s-.032-.026-.045-.041a.965.965 0 01-.149-.193c-.024-.033-.04-.071-.06-.106s-.038-.072-.054-.109l-.051-.111-.044-.114c-.031-.075-.056-.153-.081-.23a3.91 3.91 0 01-.072-.233c-.047-.156-.084-.315-.123-.473-.037-.159-.07-.318-.104-.477l-.09-.48c-.03-.16-.054-.321-.088-.48s-.063-.318-.102-.476l-.056-.237-.063-.235c-.04-.158-.093-.311-.139-.466-.055-.152-.104-.307-.168-.456-.058-.152-.129-.297-.198-.443l-.116-.213c-.039-.071-.086-.137-.128-.205-.041-.07-.094-.131-.142-.196-.046-.066-.103-.123-.157-.183-.052-.062-.114-.112-.174-.166-.057-.057-.127-.097-.191-.145a.631.631 0 00-.102-.062l-.106-.057c-.072-.035-.149-.058-.223-.088l.009.001h-.081l.007-.061c.079.027.161.048.238.08l.113.054c.038.018.076.035.11.06.143.087.275.191.391.31.119.117.222.248.318.384.045.07.094.137.135.209l.122.217c.073.149.147.297.207.451.067.152.118.309.174.464.026.078.049.158.073.236s.049.158.069.238c.043.159.085.319.12.48.039.16.071.322.103.484.034.161.059.324.088.486l.087.485c.03.161.065.321.099.482.039.159.073.32.119.477.021.079.043.158.069.236.025.078.048.156.079.232l.043.115.049.112c.016.037.033.074.053.11s.036.073.059.106a1.05 1.05 0 00.187.231c.015.012.03.025.047.035.032.025.068.033.108.075l-.021-.01c.054-.001.107-.023.154-.054s.088-.074.127-.117a1.502 1.502 0 00.195-.297 5.15 5.15 0 00.343-.83l.163-.517.192-.695.037.01c-.061.231-.127.461-.196.689s-.144.456-.227.68a5.176 5.176 0 01-.288.656 1.7 1.7 0 01-.199.298c-.039.045-.083.087-.132.12s-.107.056-.167.056zm0 0c.06-.001.117-.025.166-.058s.092-.076.13-.121c.076-.092.138-.194.194-.3.111-.211.198-.434.279-.658.159-.45.285-.91.405-1.372l.037.01-.189.698-.16.518c-.017.058-.038.116-.058.172a5.285 5.285 0 01-.285.667 2.483 2.483 0 01-.091.158 1.52 1.52 0 01-.108.149.663.663 0 01-.137.127.33.33 0 01-.182.063h-.012l-.009-.01c-.017-.019-.062-.038-.096-.063a.375.375 0 01-.051-.038 1.057 1.057 0 01-.2-.244c-.024-.035-.04-.073-.061-.109s-.038-.074-.054-.112l-.05-.114-.044-.116c-.031-.077-.055-.156-.081-.234-.027-.078-.049-.158-.071-.237-.047-.158-.083-.319-.122-.479a20.81 20.81 0 01-.101-.484l-.089-.486c-.03-.161-.055-.324-.09-.484-.033-.161-.065-.322-.104-.481a9.8 9.8 0 00-.191-.713c-.025-.078-.048-.157-.074-.234-.056-.154-.106-.31-.171-.46-.058-.153-.132-.299-.202-.446l-.119-.214c-.041-.071-.088-.137-.132-.206a2.715 2.715 0 00-.308-.376 1.93 1.93 0 00-.484-.36l-.109-.053c-.074-.031-.153-.052-.229-.078l-.175-.061.268.001.003.001c.077.031.156.056.23.092l.109.059a.594.594 0 01.105.065c.066.049.138.092.196.15.061.056.125.108.177.171.055.062.113.12.159.188.048.067.102.129.143.2.043.07.09.137.129.209l.116.216c.069.148.141.295.198.448.064.15.112.306.167.46.046.156.098.311.137.469l.062.236.055.238c.038.158.068.319.1.478.033.16.057.32.086.48l.084.48c.031.159.063.319.097.478.037.158.072.317.117.473.02.079.043.157.068.234.024.078.048.155.078.231l.042.114.049.112c.015.038.033.074.053.11s.036.073.059.107a1.027 1.027 0 00.191.235c.016.012.031.026.048.037s.073.038.1.069z"
      />
      <path
        fill="currentColor"
        d="M28.19 23.388s.92-.526 1.104-2.551c.263-2.839.736-3.838 2.235-4.338h-4.285c-.459.077-.769.329-1.003.823a.01.01 0 01.001.005.016.016 0 01-.004.007l.004.019c-.311.569-.518 1.475-.699 2.692-.201 1.17-.488 2.176-.869 2.743-.223.362-.479.572-.769.572z"
      />
      <path
        fill="currentColor"
        d="M26.224 17.364a.106.106 0 00-.004-.019 3.432 3.432 0 00-.213.487l-.001.002c-.015.041-.028.087-.042.13a8.708 8.708 0 00-.151.523c-.111.448-.207.973-.296 1.574-.165.964-.389 1.816-.674 2.41a3.226 3.226 0 01-.205.391c.385-.574.675-1.591.879-2.775.183-1.231.393-2.148.707-2.724z"
      />
      <path
        fill="currentColor"
        d="M23.57 8.618a.357.357 0 00-.195.078.9.9 0 00-.146.156c-.086.114-.155.24-.216.368-.062.128-.117.26-.169.393s-.099.268-.143.403a13.868 13.868 0 00-.245.821c-.075.276-.145.553-.21.83a68.375 68.375 0 00-.69 3.357l-.023.128-.022-.129-.002-.012.046-.001-.002.009v-.008c.063.361.131.72.199 1.081l.205 1.079c.139.719.283 1.438.439 2.153.078.358.159.715.246 1.07s.18.709.284 1.06c.052.175.107.349.166.522.06.172.124.343.196.51.074.166.154.33.254.479l.038.056.042.052c.026.036.059.066.089.098a.529.529 0 00.218.128l-.008-.001a.61.61 0 00.338-.11c.102-.067.189-.158.266-.255s.144-.205.204-.316c.03-.054.06-.113.085-.167l.074-.177c.026-.059.045-.118.068-.178.021-.06.045-.118.063-.179.039-.121.079-.242.112-.364.036-.122.067-.245.098-.368s.057-.248.087-.372l.076-.374.069-.376.14-.752c.022-.125.055-.25.082-.375l.085-.374c.013-.063.031-.126.049-.186l.053-.184c.036-.123.069-.244.113-.37l-.001.003.091-.244c.016-.04.035-.08.052-.12l.053-.119.035-.081.017.087.004.02-.052-.006.016-.03-.002.017-.095-.569c-.029-.189-.065-.378-.1-.568l-.21-1.134c-.142-.755-.288-1.51-.447-2.262-.079-.376-.163-.751-.25-1.125s-.18-.747-.285-1.117c-.052-.185-.107-.369-.168-.551s-.124-.363-.199-.54a3.245 3.245 0 00-.259-.513c-.027-.04-.052-.081-.083-.117-.015-.019-.029-.038-.045-.056l-.05-.052a.538.538 0 00-.242-.147h.001l-.174-.001c-.029.001-.058-.002-.087.003l-.022.003c-.007.001-.015.001-.021.004l-.041.016v-.001l.153.001zm0 0l-.157.001.044-.018c.007-.003.014-.003.022-.004l.021-.003c.029-.006.058-.003.087-.004l.175-.001a.55.55 0 01.246.147l.051.052.046.056c.032.037.057.078.084.117.105.161.189.336.265.512s.142.358.204.54c.062.182.119.366.173.55.216.739.389 1.489.55 2.24s.31 1.506.454 2.262l.214 1.133c.035.189.072.377.102.568l.096.568.002.01-.004.008-.015.03-.037.073-.015-.079-.003-.018.052.006-.051.118c-.017.04-.035.078-.051.118l-.089.242-.001.003c-.039.115-.074.24-.108.362l-.053.184a2.369 2.369 0 00-.048.184l-.083.372c-.027.125-.058.248-.08.373l-.138.753-.068.377-.076.376c-.029.125-.054.25-.086.374-.031.124-.061.248-.098.371-.033.124-.073.246-.112.368-.018.061-.042.121-.063.182-.023.06-.042.122-.068.18l-.073.177a3.53 3.53 0 01-.088.174c-.062.113-.13.224-.21.326s-.171.199-.283.272a.689.689 0 01-.379.122h-.004l-.004-.001a.583.583 0 01-.251-.147c-.033-.034-.068-.067-.095-.105l-.044-.055-.039-.058c-.103-.156-.184-.323-.258-.491s-.136-.342-.197-.516a13.383 13.383 0 01-.166-.526c-.103-.352-.195-.708-.281-1.064s-.167-.714-.244-1.072a93.389 93.389 0 01-.432-2.156l-.202-1.08c-.066-.36-.133-.721-.195-1.082l-.001-.005.001-.004.001-.004.027-.113.019.112.002.013-.046-.001c.105-.562.213-1.123.329-1.683s.238-1.118.376-1.673a26.587 26.587 0 01.339-1.24c.043-.136.085-.273.132-.408.046-.136.095-.27.147-.403s.109-.265.172-.393c.063-.128.133-.254.22-.367a.944.944 0 01.148-.155.357.357 0 01.197-.077z"
      />
      <path
        fill="currentColor"
        d="M26.22 17.345l.004-.007-.001-.005a.049.049 0 01-.003.007l.001.006zM26.006 17.835c-.014.042-.029.086-.042.13l.042-.13zM26.204 17.37l-.004-.019a4.626 4.626 0 00-.193.481 3.55 3.55 0 01.213-.487l-.001-.005-.015.03zM24.843 22.472c.285-.594.508-1.447.674-2.41.089-.601.185-1.126.296-1.574a21.223 21.223 0 00-.331 1.63c-.159.928-.371 1.756-.639 2.355zM19.099 23.411c.684-.158 1.261-2.102 2.233-7.41.051-.356.126-.687.178-1.018l-.017-.098.003-.012-.003-.014c.616-3.176 1.254-5.954 1.895-6.242h-3.786a.267.267 0 00-.108-.026h-.236c-.657.157-1.235 2.076-2.207 7.41-.02.121-.04.228-.06.342l.005.025c-.001.005-.001.009-.003.013l.003.013c-.408 2.199-.836 4.254-1.265 5.538-.26.805-.521 1.335-.78 1.452z"
      />
      <path
        fill="currentColor"
        d="M21.512 14.916l-.003.012.017.099a.059.059 0 00.002-.013l-.017-.098zM16.977 16.435c-.309 1.665-.63 3.246-.953 4.477-.106.41-.212.784-.318 1.113.432-1.293.863-3.362 1.274-5.577l-.003-.013zM21.51 14.903l.003.014c.619-3.218 1.261-6.01 1.905-6.299-.645.29-1.288 3.087-1.908 6.285z"
      />
      <path
        fill="currentColor"
        d="M21.533 15.02c.635-3.439 1.349-6.403 2.037-6.403h-.153c-.644.289-1.286 3.081-1.905 6.299l.017.098.001-.007.002.013zM16.972 16.41a139.246 139.246 0 00-.823-4.045 28.367 28.367 0 00-.509-1.998 8.64 8.64 0 00-.35-.967 2.782 2.782 0 00-.246-.448 1.253 1.253 0 00-.163-.192.545.545 0 00-.212-.119l.006.001c-.071.001-.149-.002-.215.003-.017.003-.038.003-.052.009l-.044.018c-.015.007-.029.018-.043.027s-.028.019-.041.032c-.105.092-.184.216-.254.34s-.13.258-.185.391c-.056.133-.105.27-.154.407a19.401 19.401 0 00-.477 1.676c-.138.565-.262 1.133-.381 1.703s-.231 1.14-.34 1.712v-.013l.098.546.1.546.203 1.091c.138.727.28 1.453.435 2.176a39.39 39.39 0 00.38 1.62c.047.179.095.357.147.534.051.177.107.353.165.528.061.174.123.348.196.517s.154.335.254.487l.038.057.042.053c.027.037.059.068.091.101.066.06.14.113.225.133l-.005-.001c.017-.003.034-.004.051-.008.016-.006.036-.012.048-.018a.422.422 0 00.093-.063.918.918 0 00.147-.168c.087-.125.157-.262.221-.4s.12-.282.174-.427c.053-.144.102-.29.15-.437.093-.293.178-.59.257-.887l.21-.9.211-.901c.035-.15.072-.3.1-.451l.091-.453.182-.907.091-.453c.029-.151.063-.302.089-.454zm0 0c-.025.152-.057.303-.085.455l-.087.454-.174.909-.087.454c-.027.152-.062.302-.096.452l-.203.903-.102.451-.104.451a19.25 19.25 0 01-.254.89c-.047.147-.096.294-.149.439s-.11.289-.174.43c-.065.14-.135.28-.224.409a.913.913 0 01-.157.179c-.031.029-.064.047-.098.067-.022.011-.04.015-.06.023-.02.005-.042.007-.063.01h-.002l-.004-.001a.57.57 0 01-.248-.145c-.033-.034-.068-.067-.095-.105l-.044-.055-.039-.058c-.104-.156-.185-.324-.26-.495s-.138-.345-.199-.52a14.161 14.161 0 01-.317-1.065 44.65 44.65 0 01-.386-1.622 96.348 96.348 0 01-.442-2.176l-.207-1.091-.102-.546-.096-.547-.001-.006.001-.007c.111-.571.225-1.142.346-1.712s.247-1.138.387-1.704c.141-.565.291-1.129.484-1.68.049-.138.099-.275.156-.409s.117-.268.189-.396c.073-.127.153-.254.267-.354.014-.013.029-.025.045-.035s.032-.022.049-.031l.058-.022c.019-.007.036-.006.055-.009.079-.005.147-.001.222-.002h.003l.003.001a.6.6 0 01.234.131c.064.062.121.128.17.201.099.144.179.298.249.457.14.316.249.644.349.974.198.66.354 1.331.503 2.003.29 1.345.537 2.699.786 4.053zM16.977 16.435l.003-.013a.221.221 0 00-.005-.025l-.002.014a.187.187 0 01.004.025z"
      />
      <path
        fill="currentColor"
        d="M16.956 16.502c-.303 1.63-.616 3.182-.932 4.41.323-1.231.644-2.812.953-4.477l-.004-.025-.016.092zM10.041 23.388c.684-.157 1.233-2.05 2.206-7.359.051-.357.126-.69.179-1.022l-.015-.083c.245-1.276.494-2.486.746-3.497.377-1.546.764-2.635 1.153-2.809h-4.139c-.657.158-1.235 2.076-2.234 7.411-.068.319-.119.638-.182.958l.018.022-.004.022.004.005c-.39 2.012-.789 3.857-1.192 5.012-.282.834-.567 1.34-.851 1.34h2.939z"
      />
      <path
        fill="currentColor"
        d="M12.453 14.953l-.005-.025a66.44 66.44 0 01.723-3.489 69.964 69.964 0 00-.75 3.515l.015.084a.313.313 0 00.005-.03l.011-.055zM7.757 17.072c-.27 1.39-.544 2.699-.821 3.758-.124.482-.249.915-.374 1.284.405-1.162.807-3.015 1.198-5.037a.018.018 0 01-.004-.005zM13.172 11.44c.418-1.683.843-2.823 1.267-2.823h-.108c-.39.175-.78 1.269-1.159 2.823z"
      />
      <path
        fill="currentColor"
        d="M14.476 8.617h-.037c-.424 0-.849 1.14-1.267 2.823a64.454 64.454 0 00-.723 3.489l.005.025c.657-3.41 1.34-6.336 2.023-6.336zM4.75 20.716l.065.353c.02.118.047.234.071.352s.051.234.08.35c.027.117.059.232.092.347.03.116.071.228.107.342l.064.168c.02.056.048.11.071.164s.055.106.081.159c.014.027.032.05.047.076s.032.05.051.073.076.092.122.129c.022.02.048.035.073.051s.053.027.076.052l-.006-.003c.067-.002.131-.031.184-.072s.099-.092.141-.147c.082-.109.149-.229.208-.352.119-.246.214-.504.3-.764a16.243 16.243 0 00.34-1.185l.091-.401.183-.803.092-.401c.032-.134.055-.269.084-.403l.324-1.613.006.028-.012-.016-.01-.014.003-.016.024-.124.008.03-.108-.123c-.04-.037-.077-.077-.119-.111-.043-.032-.083-.07-.13-.096l-.068-.043-.073-.034c-.047-.025-.1-.038-.151-.056-.052-.015-.105-.024-.158-.035-.053-.005-.109-.014-.16-.015l-1.499-.003-2.665-.014.005-.037c.096.04.197.068.286.124.045.026.093.047.135.078l.126.091c.044.028.079.067.118.101.037.036.079.067.112.107.068.078.142.151.2.236l.092.124c.029.043.055.087.083.131s.056.086.081.132l.073.136c.051.09.092.184.135.278.045.093.081.189.12.285.04.095.073.192.107.29l.051.146.045.148c.029.099.061.196.086.296l.078.299.069.301c.024.1.041.201.062.302s.04.202.057.303l.052.304zm0 0l-.054-.304c-.017-.101-.037-.202-.058-.303s-.039-.202-.064-.302l-.07-.3-.079-.298c-.025-.1-.058-.197-.087-.296l-.045-.147-.051-.145c-.034-.097-.067-.194-.108-.289-.039-.095-.075-.191-.121-.283-.044-.093-.086-.187-.137-.276l-.074-.135c-.025-.045-.055-.087-.082-.13s-.055-.087-.084-.129l-.093-.122c-.059-.084-.133-.155-.201-.232-.034-.039-.075-.069-.112-.104-.039-.033-.074-.071-.117-.098l-.125-.088c-.041-.03-.089-.049-.133-.075-.087-.053-.187-.08-.281-.118l-.089-.036 4.258-.018c.06.001.114.01.171.015.056.011.112.02.167.036.054.018.11.032.161.059l.078.036.073.045c.051.028.093.067.138.101.044.036.083.078.124.117l.123.14-.003.018-.024.125-.007-.03.013.019.009.013-.003.015-.332 1.614c-.029.134-.053.27-.085.403l-.095.401-.287 1.201c-.035.134-.072.265-.109.398-.075.264-.156.527-.245.787s-.188.517-.31.764c-.062.123-.13.244-.214.353-.042.055-.09.106-.145.148s-.123.072-.194.073h-.003l-.003-.003c-.018-.02-.046-.033-.071-.049s-.051-.032-.074-.053a.727.727 0 01-.123-.131c-.019-.023-.036-.048-.051-.074s-.033-.05-.047-.077c-.027-.054-.059-.105-.081-.161s-.051-.109-.07-.165l-.063-.168c-.035-.114-.076-.227-.106-.343a7.071 7.071 0 01-.09-.347c-.028-.116-.056-.233-.079-.35s-.05-.234-.07-.352l-.064-.353z"
      />
      <path
        fill="currentColor"
        d="M7.757 17.072l.004-.022-.018-.022-.004.022.018.022zM7.715 17.175l.012.018c-.26 1.339-.524 2.601-.791 3.638.277-1.059.551-2.368.821-3.758l-.018-.022-.024.125z"
      />
    </svg>
  },
  {
    name: 'Java',
    icon: <svg
      width="30px"
      height="30px"
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"></path></svg>

  },
  {
    name: 'Visual Basic',
    icon: <img
      viewBox="0 0 30 30"
      fill="currentColor"
      src="https://img.icons8.com/ios/45/118AB2/vb.png"
      alt='Visual Basic Icon'
    />
  },
  {
    name: 'Git',
    icon: <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path d="M21.62 11.108l-8.731-8.729a1.292 1.292 0 00-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 011.939 1.95l2.214 2.217a1.53 1.53 0 011.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 01-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 010 2.166 1.536 1.536 0 01-2.174 0 1.528 1.528 0 010-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 01-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 001.821 0l8.69-8.689a1.284 1.284 0 00.003-1.822" />

    </svg>
  },
  {
    name: 'Node.js',
    icon: <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 00-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z" />
    </svg>
  },
  {
    name: 'Mongo DB',
    icon: <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path d="M22.797 14.562a13.663 13.663 0 00-.407-2.297c-.625-2.369-1.666-4.637-3.134-6.603a16.58 16.58 0 00-1.294-1.532c-.476-.499-1.004-.957-1.336-1.578-.21-.393-.41-.791-.614-1.187-.003.124-.011.248-.011.371 0-.124.009-.248.011-.372l-.13-.327c-.022.075-.036.101-.036.129-.017.645-.383 1.083-.838 1.492-.512.46-.989.959-1.481 1.441.017.022.036.044.055.066-.019-.022-.038-.043-.055-.066-1.463 1.924-2.752 3.981-3.511 6.29a14.691 14.691 0 00-.517 2.056c-.259 1.481-.379 2.92-.296 4.42.046.829.191 1.645.407 2.448.785 2.917 2.379 5.336 4.558 7.392.405.382.842.729 1.265 1.093l.003-.011-.003.011.187.642.174.996.083 1.039c-.001.211-.01.423.003.633.003.054.074.104.113.156l.004-.006-.004.006.353.124.367.143a322.63 322.63 0 00-.063-.924l-.003-.91-.021.021.021-.021.127-1.386.092-.302.263-.467c.325-.262.674-.499.971-.79.536-.527 1.071-1.06 1.55-1.637a12.294 12.294 0 001.588-2.441c1.223-2.491 1.789-5.269 1.564-8.039l-.006-.074z" />
    </svg>
  },
  {
    name: 'GraphQL',
    icon: <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path d="M12 5.37l-.44-.06L6 14.9c.24.21.4.48.47.78h11.06c.07-.3.23-.57.47-.78l-5.56-9.59-.44.06M6.6 16.53l4.28 2.53c.29-.27.69-.43 1.12-.43.43 0 .83.16 1.12.43l4.28-2.53H6.6M12 22a1.68 1.68 0 01-1.68-1.68l.09-.56-4.3-2.55c-.31.36-.76.58-1.27.58a1.68 1.68 0 01-1.68-1.68c0-.79.53-1.45 1.26-1.64V9.36c-.83-.11-1.47-.82-1.47-1.68A1.68 1.68 0 014.63 6c.55 0 1.03.26 1.34.66l4.41-2.53-.06-.45c0-.93.75-1.68 1.68-1.68.93 0 1.68.75 1.68 1.68l-.06.45 4.41 2.53c.31-.4.79-.66 1.34-.66a1.68 1.68 0 011.68 1.68c0 .86-.64 1.57-1.47 1.68v5.11c.73.19 1.26.85 1.26 1.64a1.68 1.68 0 01-1.68 1.68c-.51 0-.96-.22-1.27-.58l-4.3 2.55.09.56A1.68 1.68 0 0112 22M10.8 4.86L6.3 7.44l.02.24c0 .71-.44 1.32-1.06 1.57l.03 5.25 5.51-9.64m2.4 0l5.51 9.64.03-5.25c-.62-.25-1.06-.86-1.06-1.57l.02-.24-4.5-2.58z" />
    </svg>
  },
  {
    name: 'C++',
    icon: <svg 
      fill="none"
      viewBox="0 0 15 15"
      height="50px"
      width="50px"
    >
      <path
        stroke="currentColor"
        d="M9.5 9.5c-.64.64-1.509 1-2.414 1H6.5a3 3 0 010-6h.586c.905 0 1.774.36 2.414 1m-2 .5v3M6 7.5h6M10.5 6v3m-9 1.5v-6l6-3.5 6 3.5v6l-6 3.5-6-3.5z"
      />
    </svg>
  },
  {
    name: 'Python',
    icon: <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path
        fill="currentColor"
        d="M13.275 15.88h5.417c1.508 0 2.712-1.241 2.712-2.756V7.96c0-1.47-1.24-2.574-2.712-2.819-.932-.155-1.898-.226-2.825-.221s-1.813.083-2.592.221c-2.295.405-2.712 1.254-2.712 2.819v2.067h5.423v.689H8.527c-1.576 0-2.956.947-3.388 2.75-.498 2.066-.52 3.355 0 5.512.385 1.606 1.306 2.75 2.882 2.75h1.865V19.25c0-1.79 1.549-3.369 3.388-3.369zm-.342-7.231a1.024 1.024 0 01-1.018-1.03c0-.572.455-1.037 1.018-1.037.56 0 1.018.465 1.018 1.037 0 .57-.457 1.03-1.018 1.03zm13.893 4.816c-.389-1.569-1.133-2.75-2.712-2.75h-2.035v2.408c0 1.867-1.583 3.439-3.388 3.439h-5.417c-1.484 0-2.712 1.27-2.712 2.756v5.164c0 1.47 1.278 2.334 2.712 2.756 1.717.505 3.363.596 5.417 0 1.365-.395 2.712-1.191 2.712-2.756v-2.067h-5.417v-.689h8.129c1.576 0 2.163-1.099 2.712-2.75.566-1.699.542-3.332 0-5.512zm-7.793 10.329c.562 0 1.018.461 1.018 1.03 0 .572-.456 1.037-1.018 1.037a1.03 1.03 0 01-1.018-1.037c0-.57.457-1.03 1.018-1.03z"
      />
    </svg>
  },
  {
    name: 'MySQL',
    icon: <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path
        fill="currentColor"
        d="M5.082 5.593c-.564.564-.423 1.213.564 2.679.508.761 1.1 1.946 1.326 2.623.226.705.677 1.664.987 2.143.564.79.564.959.197 2.397-.226.902-.31 2.031-.197 2.736.169 1.185 1.128 2.905 1.72 3.102.508.169 1.241-.733 1.269-1.551 0-.705.028-.733.338-.226.536.874 2.228 2.735 2.369 2.594.056-.056-.31-.79-.846-1.607-.508-.846-1.1-1.946-1.325-2.454-.31-.846-.423-.902-.79-.508-.226.226-.508.874-.592 1.466-.226 1.354-.733 1.523-1.128.367s-.395-3.131 0-4.484c.282-.931.254-1.184-.226-1.89-.31-.423-.79-1.438-1.044-2.256-.254-.79-.846-1.974-1.325-2.595-1.1-1.551-1.1-2.115.056-1.89.479.085 1.213.423 1.664.733.423.31 1.156.564 1.607.564 1.354 0 3.723 1.326 5.443 3.046 1.326 1.325 2.002 2.397 3.441 5.302 1.692 3.44 1.833 3.638 2.877 3.976 1.241.423 3.835 2.002 3.835 2.341 0 .113-.649.282-1.438.338-2.115.226-2.313.62-.931 1.861.649.564 1.862 1.438 2.736 1.918l1.579.902-.733-.931c-.423-.508-1.297-1.297-1.974-1.72s-1.213-.874-1.213-.987c0-.113.479-.31 1.072-.395 1.579-.282 2.03-.423 2.03-.705 0-.423-2.848-2.566-4.202-3.159-1.156-.536-1.297-.762-2.792-3.835-1.326-2.82-1.861-3.61-3.553-5.302-2.171-2.171-3.666-3.102-5.584-3.384-.649-.113-1.551-.451-1.946-.733-.931-.705-2.82-.959-3.272-.479z"
      />
    </svg>
  }
]

const AllSkills = () => {
  return(
    <div className="allSkillsContainer">
      <PageTitle title="Toolbelt" />
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          rowSpacing={2}
          columnSpacing={0}
        >
          {skills.map(skill => {
            return (
              <Grid item xs={4} sm={3}>
                <Item className="allSkillItem allSkillIcon">
                  {skill.icon}
                </Item>
                <Item className="allSkillItem">
                  {skill.name}
                </Item>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </div>
  )
}

export default AllSkills
