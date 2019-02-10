<?php 
    class ContactResponse {
        /**
         * Status of the response
         * @var bool
         */
        public $Status = false;

        /**
         * Data that returns to client
         * @var array Key=>Value object
         */
        public $Data = [];
        public function __construct($status, $data) {
            $this->Status = $status;
            $this->Data = $data;
        }
    }

    function contact_rest_api(WP_REST_Request $request) {
        $fields = $request->get_param("fields");
        if ($fields && sizeof($fields) > 0) {
            $content = '
                <h3>'.__("Письмо с контактной формы сайта: ", "brainworks") . get_bloginfo('name') .'</h3>
                <p>
                    %s
                </p>
            ';
            $items = '';
            foreach ($fields as $field) {
                foreach ($field as $j => $field_value) {
                    $field[$j] = filter_var($field_value, FILTER_SANITIZE_STRING);
                }
                $items .= '<i>'.$field['placeholder'].':</i> <b>' . $field['value'] . '</b><br/>';
            }
            $content = sprintf($content, $items);
            if (wp_mail(get_option('admin_email'), 'Контактная форма', $content, array('Content-Type: text/html; charset=UTF-8'))) {
                return new ContactResponse(true, ['text' => __("Форма успешно заполнена!", "brainworks")]);
            } else {
                return new ContactResponse(false, ['text' => __("К сожалению, мы не смогли отправить письмо!", "brainworks")]);
            }
            
        } else {
            return new ContactResponse(false, ['text' => __("Поля не были переданы!", "brainworks")]);
        }
    }

    add_action('rest_api_init', function () {
        register_rest_route('api', 'contact', [
            'methods' => 'POST',
            'callback' => 'contact_rest_api'
        ]);
    });
?>