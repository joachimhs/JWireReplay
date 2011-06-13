package org.jwirereplay.parser.util;

public class HeaderParseUtil {
	public static final int ethernetHeaderLength = 14;
	public static final int minIPHeaderLength = 20;
	public static final int ipProtocolOffset = 9;
	public static final long pcapMagicNumber = 0xA1B2C3D4;
	public static final int pcapGlobalHeaderSize = 24;
	public static final int pcapPacketHeaderSize = 16;
	
	private static long convertPcapHeaderInt(byte[] data) {
		return ((data[3] & 0xFF) << 24) | ((data[2] & 0xFF) << 16) | ((data[1] & 0xFF) << 8) | (data[0] & 0xFF);
	}

	public static long convertPcapHeaderInt(byte[] data, int offset) {
		byte[] target = new byte[4];
		System.arraycopy(data, offset, target, 0, target.length);
		return convertPcapHeaderInt(target);
	}

	private static int convertPcapHeaderShort(byte[] data) {
		return ((data[0] & 0xFF) << 8) | (data[1] & 0xFF);
	}

	public static int convertPcapHeaderShort(byte[] data, int offset) {
		byte[] target = new byte[2];
		System.arraycopy(data, offset, target, 0, target.length);
		return convertPcapHeaderShort(target);
	}
	
	public static boolean[] convertByteToBoolArray(byte b) {
		boolean[] bits = new boolean[8];
		for (int i = 0; i < bits.length; i++) {
			bits[i] = ((b & (1 << i)) != 0);
		}
		return bits;
	}

	public static boolean isByteSet(byte[] data, int offset, int pshOffset) {
		boolean set = false;
		if (offset < data.length && offset >= 0) {
			byte b = data[offset];
			boolean[] boolArr = convertByteToBoolArray(b);
			set = boolArr[pshOffset];
		}

		return set;
	}
	
	public static boolean isIPPacket(byte[] packetContents) {
		boolean isIpPacket = false;
		if (packetContents.length >= ethernetHeaderLength) {
			int type = packetContents[12] & 0xff;
			type <<= 8;
			type |= packetContents[13] & 0xff;
			isIpPacket = type == 0x0800;
		}
		
		return isIpPacket;
	}
	
	public static boolean isTCPPacket(byte[] packetContents) {
		boolean isTcpPacket = false;
		
		if (isIPPacket(packetContents) && packetContents.length >= ethernetHeaderLength + minIPHeaderLength) {
			int protocol = packetContents[ethernetHeaderLength + ipProtocolOffset];
			isTcpPacket = protocol == 0x06;
		}
		
		return isTcpPacket;
	}
}
