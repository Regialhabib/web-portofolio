import Card from "../src/components/Elements/Card";
import Footer from "../src/components/Fragments/Footer";
import Navbar from "../src/components/Fragments/Navbar";

const SkillsPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col  py-20 w-full max-w-5xl px-10 gap-10 md:mx-auto lg:px-0">
        <div>
          <h1 className="text-5xl font-bold dark:text-gray-50">Skills</h1>
        </div>
        <div className="flex w-full gap-8 flex-wrap justify-center items-center">
          <Card className="shadow  h-32  w-48  rounded-xl dark:bg-zinc-900 hover:-translate-y-4 transition-all flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="100"
              height="100"
            >
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
              <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
              <path
                fill="#FFF"
                d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
              />
              <path
                fill="#EEE"
                d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
              />
            </svg>
          </Card>
          <Card>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="100px"
              height="100px"
            >
              <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
              <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
              <path
                fill="#FFF"
                d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
              />
              <path
                fill="#EEE"
                d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
              />
            </svg>
          </Card>
          <Card>
            <svg
              fill="none"
              height="90"
              width="90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 141.53199999999998"
            >
              <path
                d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                fill="#e9ca32"
              />
              <path
                d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                fill="#ffde25"
              />
              <g fill="#fff">
                <path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
              </g>
            </svg>
          </Card>
          <Card>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="100px"
              height="100px"
            >
              <path
                fill="#00acc1"
                d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
              />
            </svg>
          </Card>
          <Card>
            <svg
              height="100"
              viewBox="0 0 512 407.864"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m106.344 0c-29.214 0-50.831 25.57-49.863 53.3.929 26.641-.278 61.145-8.964 89.283-8.717 28.217-23.449 46.098-47.517 48.393v25.912c24.068 2.3 38.8 20.172 47.516 48.393 8.687 28.138 9.893 62.642 8.964 89.283-.968 27.726 20.649 53.3 49.868 53.3h299.347c29.214 0 50.827-25.57 49.859-53.3-.929-26.641.278-61.145 8.964-89.283 8.717-28.221 23.413-46.1 47.482-48.393v-25.912c-24.068-2.3-38.764-20.172-47.482-48.393-8.687-28.134-9.893-62.642-8.964-89.283.968-27.726-20.645-53.3-49.859-53.3h-299.355zm240.775 251.067c0 38.183-28.481 61.34-75.746 61.34h-80.458a8.678 8.678 0 0 1 -8.678-8.678v-199.593a8.678 8.678 0 0 1 8.678-8.678h80c39.411 0 65.276 21.348 65.276 54.124 0 23.005-17.4 43.6-39.567 47.208v1.2c30.176 3.31 50.495 24.21 50.495 53.077zm-84.519-128.1h-45.876v64.8h38.639c29.87 0 46.34-12.028 46.34-33.527-.003-20.148-14.163-31.273-39.103-31.273zm-45.876 90.511v71.411h47.564c31.1 0 47.573-12.479 47.573-35.931s-16.935-35.484-49.573-35.484h-45.564z"
                fill="#7952b3"
                fillRule="evenodd"
              />
            </svg>
          </Card>
          <Card>
            <svg
              height="100"
              viewBox="175.7 78 490.6 436.9"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#61dafb">
                <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                <circle cx="420.9" cy="296.5" r="45.7" />
              </g>
            </svg>
          </Card>
          <Card>
            <svg
              width="100"
              height="100"
              viewBox="0 0 256 282"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <g fill="#8CC84B">
                <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
                <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
              </g>
            </svg>
          </Card>
          <Card>
            <svg
              height="100"
              viewBox="8.738 -5.03622834 17.45992422 39.40619484"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z"
                fill="#599636"
              />
              <path
                d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z"
                fill="#6cac48"
              />
              <path
                d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z"
                fill="#c2bfbf"
              />
            </svg>
          </Card>
          <Card>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 192.756 192.756"
            >
              <g fillRule="evenodd" clipRule="evenodd">
                <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                <path
                  d="M8.504 128.227h5.845v-23.023l9.013 20.078c1.07 2.408 2.499 3.256 5.354 3.256 2.856 0 4.284-.848 5.354-3.256l9.013-20.078v23.023h5.8v-22.979c0-2.23-.893-3.303-2.722-3.883-4.417-1.383-7.407-.178-8.745 2.812l-8.834 19.766-8.566-19.766c-1.294-2.99-4.328-4.195-8.745-2.812-1.874.58-2.766 1.652-2.766 3.883v22.979h-.001zM53.746 109.486h5.8v12.672c-.044.713.223 2.32 3.436 2.365 1.606.043 12.537 0 12.626 0v-15.082h5.845c.044 0 0 20.568 0 20.658.044 5.086-6.291 6.156-9.191 6.246H53.88v-3.926s18.338.045 18.382 0c3.748-.357 3.302-2.23 3.302-2.855v-1.518H63.205c-5.756-.088-9.415-2.588-9.459-5.488 0-.267.134-12.937 0-13.072zM179.076 94.896c-3.568-.089-6.291.223-8.656 1.249-.668.268-1.695.268-1.828 1.116.357.355.445.936.713 1.428.58.893 1.518 2.096 2.365 2.721.893.715 1.83 1.428 2.811 2.053 1.785 1.07 3.748 1.65 5.398 2.723 1.027.623 2.008 1.428 2.99 2.141.445.357.803.893 1.383 1.115v-.088c-.312-.402-.402-.982-.67-1.43l-1.338-1.338c-1.293-1.695-2.945-3.213-4.686-4.461-1.383-.982-4.506-2.365-5.086-3.971-.045-.045-.09-.045-.09-.09.982-.135 2.143-.49 3.035-.715 1.518-.4 2.9-.312 4.461-.713.715-.224 1.428-.402 2.143-.625v-.402c-.803-.803-1.338-1.918-2.23-2.632-2.275-1.963-4.775-3.882-7.318-5.488-1.428-.937-3.168-1.517-4.684-2.275-.492-.223-1.385-.357-1.74-.803-.805-.982-1.205-2.276-1.83-3.436a123.45 123.45 0 0 1-3.658-7.764c-.758-1.74-1.295-3.48-2.23-5.087-4.641-7.585-9.594-12.18-17.312-16.687-1.65-.937-3.613-1.338-5.711-1.829-1.115-.09-2.23-.134-3.346-.224-.67-.268-1.383-1.115-2.053-1.517-2.543-1.606-9.102-5.131-10.977-.491-1.205 2.9 1.785 5.756 2.855 7.229.76 1.026 1.695 2.187 2.232 3.346.355.758.4 1.517.713 2.32.758 2.008 1.383 4.194 2.32 6.023.49.937 1.025 1.919 1.65 2.767.357.491 1.027.714 1.115 1.517-.625.892-.668 2.231-1.025 3.346-1.562 5.042-.982 11.244 1.338 14.991.715 1.115 2.365 3.569 4.686 2.633 2.008-.848 1.561-3.347 2.141-5.622.135-.491.045-.848.312-1.205v.089c.58 1.249 1.205 2.454 1.83 3.658 1.338 2.187 3.748 4.507 5.801 6.023 1.025.803 1.873 2.187 3.256 2.632v-.09h-.133c-.268-.4-.67-.579-.982-.892-.803-.803-1.695-1.785-2.365-2.677-1.828-2.499-3.479-5.265-4.996-8.121-.715-1.383-1.34-2.9-1.918-4.283-.225-.535-.225-1.338-.715-1.651-.67 1.026-1.605 1.874-2.143 3.079-.803 1.919-.936 4.283-1.203 6.693-.18.089-.135.044-.225.134-1.426-.357-1.918-1.83-2.453-3.079-1.293-3.168-1.562-8.254-.402-11.913.312-.937 1.697-3.882 1.117-4.774-.27-.848-1.117-1.383-1.607-2.052-.625-.803-1.205-1.874-1.65-2.811-1.07-2.499-1.562-5.265-2.723-7.763-.58-1.205-1.471-2.41-2.23-3.436-.848-1.205-1.785-2.052-2.453-3.48-.223-.491-.535-1.294-.223-1.83.133-.357.268-.491.623-.625.58-.446 2.232.179 2.855.401 1.607.714 2.99 1.339 4.373 2.276.67.446 1.34 1.293 2.143 1.517h.893c1.428.312 3.033.089 4.371.491 2.365.713 4.506 1.829 6.426 3.079 5.889 3.703 10.664 8.968 13.965 15.259.535 1.026.758 1.963 1.205 3.034.938 2.187 2.141 4.417 3.078 6.514.893 2.142 1.83 4.284 3.123 6.023.715.937 3.391 1.428 4.596 1.918.848.357 2.23.758 3.035 1.25 1.561.892 3.033 2.008 4.506 3.034.712.496 2.942 1.611 3.032 2.548z"
                  fill="#00678c"
                />
                <path
                  d="M133.566 56.124a7.59 7.59 0 0 0-1.828.224v.089h.133c.357.714.982 1.205 1.428 1.829.312.714.67 1.428.982 2.142l.133-.134c.625-.401.893-1.115.893-2.23-.223-.268-.268-.58-.49-.893-.313-.447-.848-.67-1.251-1.027z"
                  fill="#00678c"
                />
                <path
                  d="M85.96 128.227h16.731c1.963 0 3.881-.402 5.398-1.117 2.498-1.158 3.748-2.721 3.748-4.773v-4.283c0-1.65-1.428-3.256-4.148-4.283-1.473-.58-3.258-.848-4.998-.848h-7.049c-2.365 0-3.48-.715-3.748-2.275-.045-.178-.045-.357-.045-.535v-2.633c0-.178 0-.312.045-.49.268-1.205.892-1.562 2.945-1.74.178 0 .401-.045.58-.045h16.642v-3.881H95.687c-2.365 0-3.57.178-4.685.49-3.48 1.115-4.997 2.811-4.997 5.801v3.391c0 2.633 2.989 4.863 7.942 5.398.58 0 1.115.045 1.695.045h6.024c.223 0 .445 0 .623.045 1.875.178 2.633.49 3.213 1.158.312.357.447.67.447 1.072v3.391c0 .402-.268.938-.848 1.383-.492.447-1.34.715-2.455.803-.223 0-.4.045-.625.045H85.96v3.881zM148.156 121.443c0 4.016 2.945 6.246 8.969 6.693.535.045 1.115.09 1.65.09h15.17v-3.883h-15.26c-3.436 0-4.729-.848-4.729-2.9v-20.121h-5.801v20.121h.001zM115.541 121.666v-13.83c0-3.525 2.453-5.666 7.361-6.336.492-.09 1.072-.09 1.562-.09h11.064c.535 0 1.027 0 1.607.09 4.863.67 7.361 2.811 7.361 6.336v13.83c0 2.857-1.07 4.373-3.48 5.355l5.756 5.176h-6.781l-4.641-4.15-4.686.268h-6.201c-1.07 0-2.186-.133-3.436-.49-3.701-.983-5.486-2.946-5.486-6.159zm6.291-.355c0 .223.045.4.09.625.357 1.605 1.873 2.498 4.148 2.498h5.311l-4.863-4.373h6.781l4.238 3.793c.76-.402 1.295-1.027 1.473-1.83.045-.223.045-.4.045-.58v-13.295c0-.135 0-.312-.045-.492-.357-1.516-1.873-2.363-4.105-2.363h-8.834c-2.588 0-4.238 1.115-4.238 2.855v13.162h-.001zM176.623 128.227h.848v-3.213h1.16v-.67h-3.168v.67h1.16v3.213zm6.514 0h.758v-3.883h-1.16l-1.025 2.678-1.025-2.678h-1.205v3.883h.803v-2.945l1.115 2.945h.58l1.115-2.945h.045v2.945h-.001z"
                  fill="#ce8b2c"
                />
                <path
                  d="M9.798 91.639V77.004h4.55c1.071 0 1.83.09 2.365.268.669.268 1.204.714 1.65 1.428.402.669.625 1.517.625 2.499 0 1.339-.356 2.409-1.026 3.213-.669.847-1.83 1.249-3.48 1.249h-3.079v5.979H9.798v-.001zm1.606-7.674h3.123c.982 0 1.695-.223 2.142-.669s.669-1.116.669-2.008c0-.58-.134-1.071-.357-1.473-.223-.446-.491-.713-.803-.847-.312-.179-.893-.224-1.695-.224h-3.079v5.221zM20.551 84.5c0-2.454.536-4.373 1.651-5.711 1.115-1.339 2.454-2.008 4.104-2.008 1.071 0 2.053.268 2.9.892.893.58 1.562 1.472 2.097 2.588.491 1.16.758 2.499.758 4.06 0 2.187-.491 3.972-1.473 5.31-1.115 1.517-2.543 2.275-4.283 2.275-1.784 0-3.212-.803-4.283-2.32-.98-1.382-1.471-3.078-1.471-5.086zm1.651.045c0 1.784.401 3.212 1.205 4.194.758.981 1.74 1.517 2.9 1.517s2.142-.536 2.9-1.517c.803-1.026 1.205-2.499 1.205-4.461 0-1.25-.223-2.365-.625-3.347-.312-.758-.759-1.383-1.383-1.829a3.559 3.559 0 0 0-2.098-.669c-1.205 0-2.186.491-2.944 1.472-.803 1.026-1.16 2.543-1.16 4.64zM36.123 91.639l-3.168-14.635h1.606l1.83 9.593c.223.982.356 2.008.535 2.99l.535-2.677 2.32-9.905h1.874l1.695 7.407a49.46 49.46 0 0 1 .981 5.175c.134-.937.312-2.008.58-3.167l1.874-9.415h1.651L45.135 91.64h-1.562L41.03 80.485l-.402-1.695c-.089.625-.223 1.205-.312 1.695l-2.587 11.154h-1.606zM49.909 91.639V77.004h8.656v1.741h-7.094v4.462h6.648v1.74h-6.648v4.997h7.362v1.695h-8.924zM61.019 91.639V77.004h5.31c1.116 0 1.963.134 2.454.402.536.268.981.759 1.338 1.383.312.625.491 1.383.491 2.187 0 1.115-.268 2.007-.848 2.721-.58.669-1.428 1.116-2.543 1.294.446.268.803.536 1.026.803.491.58.893 1.205 1.249 1.874l2.098 3.971h-2.008l-1.606-3.034c-.625-1.204-1.071-2.008-1.383-2.409-.312-.401-.625-.669-.937-.848-.268-.134-.669-.223-1.205-.223h-1.829v6.514h-1.607zm1.606-8.165h3.391c.758 0 1.338-.089 1.695-.268.401-.179.714-.491.937-.848.223-.401.312-.848.312-1.339 0-.758-.178-1.338-.625-1.784-.446-.401-1.071-.625-1.918-.625h-3.792v4.864zM73.155 91.639V77.004h8.656v1.741h-7.05v4.462h6.603v1.74h-6.603v4.997h7.362v1.695h-8.968zM84.264 91.639V77.004h4.149c1.026 0 1.785.09 2.32.268.714.223 1.294.669 1.829 1.294.491.625.893 1.383 1.205 2.32.268.937.401 2.053.401 3.347 0 1.651-.223 3.079-.714 4.238-.491 1.16-1.115 1.963-1.874 2.454-.758.491-1.785.714-2.989.714h-4.327zm1.607-1.695h2.543c1.026 0 1.785-.179 2.32-.535.536-.312.937-.848 1.249-1.606.357-.981.536-2.186.536-3.569 0-1.473-.178-2.677-.58-3.525-.402-.848-.938-1.428-1.562-1.696-.402-.178-1.071-.268-2.008-.268H85.87v11.199h.001zM101.441 91.639V77.004h4.508c.936 0 1.65.134 2.186.446.535.268.982.714 1.295 1.294.355.625.535 1.25.535 2.008 0 .669-.18 1.25-.447 1.785-.312.535-.713.981-1.248 1.293a3.654 3.654 0 0 1 1.65 1.294c.4.625.58 1.383.58 2.276s-.18 1.65-.535 2.32c-.357.669-.848 1.16-1.473 1.473-.58.312-1.428.446-2.498.446h-4.553zm1.608-8.477h2.588c.668 0 1.16-.044 1.428-.134.445-.134.758-.401.98-.713.225-.312.312-.759.312-1.338 0-.536-.088-.982-.268-1.339-.223-.357-.49-.58-.848-.714-.312-.134-.938-.179-1.785-.179h-2.408v4.417h.001zm0 6.782h2.988c.625 0 1.115-.089 1.428-.179a2.011 2.011 0 0 0 1.027-.892c.268-.357.355-.892.355-1.472s-.088-1.026-.311-1.428c-.225-.357-.535-.669-.938-.848-.357-.178-.982-.268-1.785-.268h-2.766v5.087h.002zM116.031 91.639v-6.202l-4.594-8.433h1.918l2.363 4.417a32.13 32.13 0 0 1 1.25 2.499c.357-.803.758-1.651 1.295-2.588l2.32-4.328h1.828l-4.773 8.433v6.202h-1.607z"
                  fill="#00678c"
                />
              </g>
            </svg>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SkillsPage;