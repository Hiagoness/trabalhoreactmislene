
import alertify from 'alertifyjs';

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
         
        if (!response.ok) {
            if ([401, 403, 500].indexOf(response.status) !== -1) {
                localStorage.removeItem("user");      
                        
                alertify.set('notifier', 'position', 'top-left');
                alertify.error(data.mensagem );

                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            
            }

            const error = (data && data.mensagem) || response.statusText;
            return Promise.reject(error);
        }

        alertify.set('notifier', 'position', 'top-left');
        alertify.success(data.mensagem );

        return data ;
    });
}