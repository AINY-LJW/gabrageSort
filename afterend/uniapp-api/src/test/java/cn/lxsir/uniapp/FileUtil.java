package cn.lxsir.uniapp;

import java.io.InputStream;

/**
 * @创建人 HJY
 * @创建时间 2019/7/17  13:25
 * @描述
 */
public class FileUtil {
    public static InputStream getResourcesFileInputStream(String fileName) {
        return Thread.currentThread().getContextClassLoader().getSystemResourceAsStream( fileName);
    }
}
